export interface RouterOptions {
  onRoute: (path: string) => void | Promise<void>;
}

export class Router {
  private onRoute: (path: string) => void | Promise<void>;

  constructor(options: RouterOptions) {
    this.onRoute = options.onRoute;
    window.addEventListener("popstate", () => this.handlePop());
  }

  navigate(url: string): void {
    const currentUrl = this.getPath();
    history.pushState({ previous: currentUrl }, "", url);
    this.onRoute(this.getPath());
  }

  private handlePop(): void {
    this.onRoute(this.getPath());
  }

  private getPath(): string {
    return window.location.pathname;
  }

  start(): void {
    this.onRoute(this.getPath());
  }
}
