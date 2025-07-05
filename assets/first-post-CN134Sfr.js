import{j as n}from"./jsx-runtime-DQXSIGLg.js";const c={title:"我的第一篇文章",date:"2023-01-01",tags:["react","mdx"],category:"技术"};function s(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",em:"em"},t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"欢迎来到我的博客"}),`
`,n.jsx(e.p,{children:"这是我的第一篇使用MDX的文章。"}),`
`,n.jsx(e.h2,{children:"MDX特性展示"}),`
`,n.jsx(e.p,{children:"你可以嵌入React组件："}),`
`,n.jsx("div",{className:"p-4 bg-blue-100 rounded-lg my-4",children:n.jsx(e.p,{children:"这是一个自定义的React组件样式块"})}),`
`,n.jsx(e.p,{children:"也可以使用Markdown语法："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"列表项1"}),`
`,n.jsx(e.li,{children:"列表项2"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"加粗"}),"和",n.jsx(e.em,{children:"斜体"}),"文本也能正常工作。"]})]})}function i(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{i as default,c as frontmatter};
