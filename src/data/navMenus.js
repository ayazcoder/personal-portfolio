const navMenus = {
  top: {
    logo: {
      leftText: "Ayaz Khan",
      rightText: "Unknown",
      link: ""
    }
  },

  home: {
    folders: [
      {
        children: [
          { name: "Home", link: "/" }
        ]
      },
      {
        children: [
          { name: "About", link: "/about" }
        ]
      },
      {
        children: [
          { name: "Services", link: "/services" }
        ]
      },
      {
        children: [
          { name: "Portfolio", link: "/portfolio" }
        ]
      },
      // {
      //   children: [
      //     { name: "Blog", link: "/blog" }
      //   ]
      // },
      {
        children: [
          { name: "Contact", link: "/contact" }
        ]
      }
    ]
  }
};

export default navMenus;