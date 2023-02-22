const VIEWPORTS = {
  mobile: {
    name: "Mobile - iPhone SE",
    styles: {
      width: "375px",
      height: "667px"
    }
  },
  tablets: {
    name: "Tablets - iPad mini",
    styles: {
      width: "768px",
      height: "1024px"
    }
  },
  desktop: {
    name: "Desktops",
    styles: {
      width: "1024px",
      height: "768px"
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: VIEWPORTS
  }
}