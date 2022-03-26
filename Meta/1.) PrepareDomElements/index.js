function createElements(json, parentId) {
  if (!json) return;
  let parent = document.getElementById(parentId);

  json.forEach((element) => {
    let child = document.createElement(element.type);

    child = addProps(child, element.props);

    const isArray = Array.isArray(element.children);

    if (element?.children && !isArray) {
      child.innerHTML = element.children;
    }

    parent.appendChild(child);

    if (Array.isArray(element?.props?.children)) {
      createElements(element.props.children, element.props.id);
    }
  });
}

const dom = [
  {
    type: "div",
    props: { id: "hello", children: [{ type: "h1", children: "HELLO" }] },
  },
  {
    type: "div",
    props: {
      id: "list",
      children: [
        {
          type: "ul",

          props: {
            id: "sorted-list",
            children: [
              { type: "li", children: "first item" },
              { type: "li", children: "second item" },
              { type: "li", children: "third item" },
            ],
          },
        },
      ],
    },
  },
];

function createDomElement() {
  createElements(dom, "test");
}
function addProps(element, properties) {
  for (const key in properties) {
    element[key] = properties[key];
  }
  return element;
}
createDomElement();
