(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{28:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(16),r=a.n(n),c=(a(6),a(28),a(7),a(0));var l=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{className:"display-3",children:"Employee Directory"}),Object(c.jsx)("h2",{className:"lead",children:"Bringing employers an organized way to to filter and search their employees!"})]})},i=a(17),o=a(22),d=a(18),h=a(19),j=a(20),m=a(23),b=a(21),u=a.n(b),p=function(){return u.a.get("https://randomuser.me/api/?results=100")};a(48);var O=function(e){return Object(c.jsx)("div",{className:"search-form",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:e.value,name:"search",type:"text",className:"search-input",placeholder:"Enter an employee to search","aria-label":"Search",onChange:e.changeHandler}),Object(c.jsx)("button",{className:"searchBtn",type:"search",children:"Search"})]})})},y=(a(49),function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={search:"",sortEmployeesInOrderOf:"asc",employee:[],displayEmployee:[]},e.handleInputChange=function(t){var a=t.target.value.toLowerCase(),s=e.state.employee.filter((function(e){return(e.name.first+e.name.last).toLowerCase().includes(a)}));e.setState({displayEmployee:s,search:a})},e.sortByName=function(){var t=Object(i.a)(Array,Object(o.a)(e.state.employee)).sort((function(e,t){return e.name.first+e.name.last<t.name.first+t.name.last?-1:e.name.first+e.name.last>t.name.first+t.name.last?1:0}));"desc"===e.state.sortEmployeesInOrderOf?(t.reverse(),e.setState({sortEmployeesInOrderOf:"asc"})):e.setState({sortEmployeesInOrderOf:"desc"}),e.setState({displayEmployee:t})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employee:t.data.results,displayEmployee:t.data.results})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"spacing",children:[Object(c.jsx)(O,{changeHandler:this.handleInputChange,value:this.state.search}),Object(c.jsx)("div",{className:"datatable mt-3",children:Object(c.jsxs)("table",{className:"empTable table-striped table-hover table-condensed",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"m-2",children:[Object(c.jsx)("th",{children:"Photo"}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{type:"button",className:"sort",onClick:this.sortByName,children:" Name"})}),Object(c.jsx)("th",{children:"Age"}),Object(c.jsx)("th",{children:"City"}),Object(c.jsx)("th",{children:"State"}),Object(c.jsx)("th",{children:"Nationality"}),Object(c.jsx)("th",{children:"Email"})]})}),this.state.displayEmployee&&this.state.displayEmployee.map((function(e){return Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.picture.large,alt:e.name.first+" "+e.name.last})}),Object(c.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(c.jsx)("td",{children:e.dob.age}),Object(c.jsx)("td",{children:e.location.city}),Object(c.jsx)("td",{children:e.location.state}),Object(c.jsx)("td",{children:e.nat}),Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:"mailto: "+e.email,target:"_blank",rel:"noreferrer",children:e.email})})]},e.id.value)})}))]})})]})}}]),a}(s.Component));var f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsx)(y,{})]})};r.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))},7:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.e0ec8f39.chunk.js.map