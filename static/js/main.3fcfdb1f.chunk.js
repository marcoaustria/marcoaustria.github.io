(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(55)},30:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(21),r=t.n(i),s=(t(30),t(1)),c=t(2),m=t(4),o=t(3),u=t(5),p=(t(32),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,e.roleDescription," ",l.a.createElement("i",null,"Eye for Design")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component)),h=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("img",{src:"/images/email.png",id:"emailimg"}),l.a.createElement("span",null)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))})))),l.a.createElement("a",{href:"https://drive.google.com/file/d/1cuQdgbrVdnVTWeMfvXJfTtYPE6SXKJZJ/view",style:{fontSize:"25px",textAlign:"center"}},"Link to Full Resume")))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",{style:{marginBottom:"15px"}},"Check Out Some of My Projects"),l.a.createElement("h1",{style:{marginBottom:"20px",textTransform:"none",fontSize:"12px"}},"Click each image to learn more!"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("a",{href:"".concat(e.giturl)},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),g=(n.Component,n.Component,function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}),l.a.createElement("h4",{style:{marginTop:"15px"}},"Built using React"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),f={imagebaseurl:"https://rbhatia46.github.io/",name:"Marco Austria",role:"",linkedinId:"marcoaustria",roleDescription:"Software Engineer, with an ",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/marcoaustria/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/marcoaustria",className:"fa fa-github"}],aboutme:"I am a Senior studying Computer Science in the Herbert Wertheim College of Engineering at the University of Florida. I am interested in mobile and web development for the purpose of helping people with their technological outreach, as well as the UX/UI/HCI aspects of these disciplines. I am skilled in multiple spoken languages, as well as multiple programming languages, and hope to learn many more in the future. My hobbies include traveling, learning languages, playing instruments, reading, and learning about new and upcoming technologies. I hope to continually learn more about Computer Science in class and out of class in internships to gain more experience and abilities, creating products that will be useful and impacting for the masses.",address:"Gainesville, FL",email:"",education:[{UniversityName:"University of Florida",specialization:"B.S. in Computer Science(Engineering)",MonthOfPassing:"May",YearOfPassing:"2020",Achievements:"Minor in Digital Arts and Sciences"},{UniversityName:"University of New South Wales",specialization:"Sydney, Australia",MonthOfPassing:"Spring",YearOfPassing:"2017",Achievements:"Study Abroad"}],work:[{CompanyName:"American Express Co.",specialization:"Software Engineering Intern",MonthOfLeaving:"Summer",YearOfLeaving:"2019",Achievements:"Automation, Python, FrontEnd, React, Flask API"},{CompanyName:"A Plus Home Rentals",specialization:"Office Assistant/Handyman",MonthOfLeaving:"",YearOfLeaving:"2012-2019",Achievements:"Automation, Java, Computer Maintenance & Optimization"}],skillsDescription:"",skills:[{skillname:"Python"},{skillname:"Reactjs"},{skillname:"Java"},{skillname:"HTML/CSS"}],portfolio:[{name:"EnglishAide",description:"React Native App",imgurl:"./images/englishaide.png",giturl:"https://github.com/marcoaustria/EnglishAide"},{name:"CultureShock",description:"Android App",imgurl:"./images/cultureshock.png",giturl:"https://github.com/zryan2/CultureShock"},{name:"KrishnaLunch",description:"Android App",imgurl:"./images/krishnaapp.png",giturl:"https://github.com/marcoaustria/KrishnaLunch"},{name:"SportFolio",description:"Web App",imgurl:"./images/sportfolio.png",giturl:"https://github.com/GeorgeRPu/SportCards3"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:f}),l.a.createElement(h,{resumeData:f}),l.a.createElement(d,{resumeData:f}),l.a.createElement(E,{resumeData:f}),l.a.createElement(g,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=t(24);r.a.render(l.a.createElement(b.a,{basename:""},l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.3fcfdb1f.chunk.js.map