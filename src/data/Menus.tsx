type Menu = {
  id: number;
  name: string;
  icon: string;
  link: string;
};

export const mainMenu: Menu[] = [
  { id: 1, name: "Categories", icon: "/categories.svg", link: "/categories" },
  { id: 2, name: "Collections", icon: "/tag.svg", link: "/collections" },
  { id: 3, name: "Trending", icon: "/light.svg", link: "/trending" },
  { id: 4, name: "All Recipes", icon: "/clipboard.svg", link: "/recipes" },
];
export const footerMenu: Menu[] = [
  { id: 1, name: "Categories", icon: "/categories.svg", link: "/categories" },
  { id: 2, name: "Collections", icon: "/tag.svg", link: "/collections" },
  { id: 3, name: "Trending", icon: "/light.svg", link: "/trending" },
  { id: 4, name: "All Recipes", icon: "/clipboard.svg", link: "/recipes" },
];
