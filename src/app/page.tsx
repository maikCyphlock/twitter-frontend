function App() {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[1fr,auto] bg-black text-white">
        <main className="grid lg:grid-cols-[1fr,45vw]">
          <div className="relative hidden items-center justify-center lg:flex">
            <figure>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  inset: 0,
                }}
              >
                <img
                  alt="Twitter banner"
                  src="https://twitter-clone-ccrsxx.vercel.app/_next/image?url=%2Fassets%2Ftwitter-banner.png&w=1920&q=75"
                
                  className="object-cover"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                  sizes="100vw"
                />
              </span>
            </figure>
            <i className="absolute">
              <svg
                className="fill-current h-96 w-96 text-white"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </g>
              </svg>
            </i>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center">
            <i className="mb-0 self-center lg:mb-10 lg:self-auto">
              <svg
                className="fill-current -mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </g>
              </svg>
            </i>
            <div className="flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16">
              <h1 className='text-lg font-thin  lg:text-3xl flex flex-col gap-4' >
              See what’s happening in the world right now.
              <br />
                  <span className=" lg:text-6xl font-black">
                  Happening now
                  </span>
              </h1> 
              <h2 className="hidden text-xl lg:block lg:text-3xl">
                Join Twitter today.
              </h2>
            </div>
            <div className="flex max-w-xs flex-col gap-6 [&_button]:py-2">
              <div className="grid gap-3 font-bold">
                <button
                  className=" text-black rounded-full  flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75"
                  type="button"
                >
                  <svg
                    className="h-6 w-6"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <g>
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </g>
                  </svg>{" "}
                  Sign up with Google
                </button>
                <button
                  className="text-black flex cursor-not-allowed justify-center gap-2 border border-light-line-reply rounded-full font-bold text-light-primary transition hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75"
                  type="button"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24">
                    <g>
                      <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                    </g>
                  </svg>{" "}
                  Sign up with Github
                </button>
                <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2">
                  <i className="border-b border-light-border dark:border-dark-border" />
                  <p>or</p>
                  <i className="border-b border-light-border dark:border-dark-border" />
                </div>
                <button
                  className="custom-button main-tab cursor-not-allowed bg-accent-blue text-white transition hover:brightness-90 focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75"
                  type="button"
                >
                  Sign up with phone or email
                </button>
                <p className="inner:custom-underline inner:custom-underline text-center text-xs text-light-secondary inner:text-accent-blue dark:text-dark-secondary">
                  By signing up, you agree to the{" "}
                  <a
                    href="https://twitter.com/tos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                  , including{" "}
                  <a
                    href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cookie Use
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold">Already have an account? </p>
                <button
                  className="custom-button main-tab border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20 dark:border-light-secondary"
                  type="button"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex">
          <nav className="flex flex-wrap justify-center gap-4 gap-y-2">
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://about.twitter.com"
            >
              About
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://help.twitter.com"
            >
              Help Center
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/tos"
            >
              Privacy Policy
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://support.twitter.com/articles/20170514"
            >
              Cookie Policy
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://help.twitter.com/resources/accessibility"
            >
              Accessibility
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html"
            >
              Ads Info
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://blog.twitter.com"
            >
              Blog
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://status.twitterstat.us"
            >
              Status
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://careers.twitter.com"
            >
              Careers
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://about.twitter.com/press/brand-assets"
            >
              Brand Resources
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise"
            >
              Advertising
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://marketing.twitter.com"
            >
              Marketing
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://business.twitter.com"
            >
              Twitter for Business
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://developer.twitter.com"
            >
              Developers
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/i/directory/profiles"
            >
              Directory
            </a>
            <a
              className="custom-underline"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/settings"
            >
              Settings
            </a>
            <p>© 2022 Twitter, Inc.</p>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default App;
