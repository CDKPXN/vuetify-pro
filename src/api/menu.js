const Menu = [
  // component字段对应的是path.js中的name，通过路由名称进行跳转，具体见AppDrawer中实现
  {
    title: "Dashboard",
    group: "dashboard",
    icon: "dashboard",
    name: "Dashboard",
    items: [
      { name: "analysis", title: "Analysis", component: "Analysis" },
      { name: "monitor", title: "Monitor", component: "Monitor" },
      { name: "workplace", title: "Workplace", component: "Workplace" }
    ]
  },
  {
    title: "Form",
    group: "form",
    icon: "edit",
    name: "Form",
    items: [
      { name: "basic-form", title: "Basic Form", component: "BasicForm" },
      { name: "step-form", title: "Step Form", component: "StepForm" },
      {
        name: "advanced-form",
        title: "Advanced Form",
        component: "AdvancedForm"
      }
    ]
  },
  {
    title: "List",
    group: "list",
    icon: "view_list",
    name: "list",
    items: [
      { name: "search-table", title: "Search Table", component: "SearchTable" },
      { name: "basic-list", title: "Basic List", component: "BasicList" },
      { name: "card-list", title: "Card List", component: "CardList" },
      { name: "search-list", title: "Search List", component: "SearchList" }
    ]
  },
  {
    title: "Profile",
    group: "profile",
    icon: "assignment",
    name: "profile",
    items: [
      {
        name: "basic-profile",
        title: "Basic Profile",
        component: "BasicProfile"
      },
      {
        name: "advanced-profile",
        title: "Advanced Profile",
        component: "AdvancedProfile"
      }
    ]
  },
  {
    title: "Result",
    group: "result",
    icon: "check_circle",
    name: "result",
    items: [
      { name: "success", title: "Success", component: "Success" },
      { name: "fail", title: "Fail", component: "Fail" }
    ]
  },
  {
    title: "Exception",
    group: "exception",
    icon: "warning",
    name: "exception",
    items: [
      { name: "403", title: "403", component: "403" },
      { name: "404", title: "404", component: "404" },
      { name: "500", title: "500", component: "500" }
    ]
  },
  {
    title: "Account",
    group: "account",
    icon: "person",
    name: "account",
    items: [
      {
        name: "account-center",
        title: "Account Center",
        component: "AccountCenter"
      },
      {
        name: "account-settings",
        title: "Account Settings",
        component: "AccountSettings"
      }
    ]
  }
];
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
