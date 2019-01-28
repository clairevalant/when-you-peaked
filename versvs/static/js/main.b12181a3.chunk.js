(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{266:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(83),i=a.n(o),s=(a(93),a(36)),l=a(13),c=a(14),u=a(16),d=a(15),h=a(17),m=a(269),g=a(268),p=(a(40),a(96),a(267)),v=a(270),b=a(84),y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"chart"},n.a.createElement(b.a,{data:{labels:this.props.years,datasets:[{label:"Average Rating per Year",fill:!1,lineTension:.1,backgroundColor:"#e0e2e2",borderColor:"#ea4136",data:this.props.ratings}]},options:{responsive:!0,legend:{display:!1},title:{display:!0,text:"Average Rating per Publication Year"},scales:{yAxes:[{ticks:{max:5},scaleLabel:{display:!0,labelString:"Average Rating"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Original Publication Year"}}]}}})))}}]),t}(r.Component),k=a(51),E=a.n(k),f=a(52),w=a.n(f),B=a(258);B("#id");var _=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getData=function(t){E()({url:"https://proxy.hackeryou.com",dataResponse:"json",paramsSerializer:function(e){return w.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://www.goodreads.com/search?q=".concat(t,"&search[field]=author&format=xml&key=dRJuutBqKWVrrJUND8jbmQ"),params:{q:t,key:"dRJuutBqKWVrrJUND8jbmQ"},proxyHeaders:{header_params:"value"},xmlToJSON:!0}}).then(function(t){B(".card",{offset:0,ease:"outCube",duration:1500});var a=t.data.GoodreadsResponse.search.results.work,r=a.filter(function(e){return e.original_publication_year.hasOwnProperty("$t")}),n=a.filter(function(e){return e.original_publication_year.hasOwnProperty("$t")});r.sort(function(e,t){var a=0;return e.average_rating>t.average_rating?a=1:e.average_rating<t.average_rating&&(a=-1),a}),n.sort(function(e,t){var a=0;return e.original_publication_year.$t>t.original_publication_year.$t?a=1:e.original_publication_year.$t<t.original_publication_year.$t&&(a=-1),a});var o=n.map(function(e){return e.original_publication_year.$t}),i=n.map(function(e){return e.average_rating});e.setState({sortedByAvg:r,yearsArray:o,ratingsArray:i}),e.setState({highBook:{id:e.state.sortedByAvg[e.state.sortedByAvg.length-1].best_book.id.$t,title:e.state.sortedByAvg[e.state.sortedByAvg.length-1].best_book.title,year:e.state.sortedByAvg[e.state.sortedByAvg.length-1].original_publication_year.$t,avgRating:e.state.sortedByAvg[e.state.sortedByAvg.length-1].average_rating,cover:e.state.sortedByAvg[e.state.sortedByAvg.length-1].best_book.img_url},lowBook:{id:e.state.sortedByAvg[0].best_book.id.$t,title:e.state.sortedByAvg[0].best_book.title,year:e.state.sortedByAvg[0].original_publication_year.$t,avgRating:e.state.sortedByAvg[0].average_rating,cover:e.state.sortedByAvg[0].best_book.img_url}}),e.getDescAndUrl(e.state.highBook),e.getDescAndUrl(e.state.lowBook)})},e.getDescAndUrl=function(t){E()({url:"https://proxy.hackeryou.com",dataResponse:"json",paramsSerializer:function(e){return w.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://www.goodreads.com/book/show/".concat(t.id,".xml"),params:{key:"dRJuutBqKWVrrJUND8jbmQ",text_only:!1},proxyHeaders:{header_params:"value"},xmlToJSON:!0}}).then(function(a){var r=a.data.GoodreadsResponse.book.description,n=a.data.GoodreadsResponse.book.url,o=a.data.GoodreadsResponse.book.ratings_count,i=a.data.GoodreadsResponse.book.text_reviews_count,s=(i/o*100).toFixed(2);t===e.state.highBook?e.setState({highBook:{id:e.state.sortedByAvg[e.state.sortedByAvg.length-1].best_book.id.$t,title:e.state.sortedByAvg[e.state.sortedByAvg.length-1].best_book.title,year:e.state.sortedByAvg[e.state.sortedByAvg.length-1].original_publication_year.$t,avgRating:e.state.sortedByAvg[e.state.sortedByAvg.length-1].average_rating,cover:e.state.sortedByAvg[e.state.sortedByAvg.length-1].best_book.img_url,url:n,description:r,starRatingCount:o,textReviewCount:i,talkScore:s}}):e.setState({lowBook:{id:e.state.sortedByAvg[0].best_book.id.$t,title:e.state.sortedByAvg[0].best_book.title,year:e.state.sortedByAvg[0].original_publication_year.$t,avgRating:e.state.sortedByAvg[0].average_rating,cover:e.state.sortedByAvg[0].best_book.img_url,url:n,description:r,starRatingCount:o,textReviewCount:i,talkScore:s}})})},e.onClick=function(t){e.setState(Object(s.a)({},t.target.id,!e.state[t.target.id]))},e.state={sortedByAvg:[],yearsArray:[],ratingsArray:[],highBook:{id:0,title:"",year:0,description:"",avgRating:0,cover:"",url:"",starRatingCount:0,textReviewCount:0,talkScore:0},lowBook:{id:0,title:"",year:0,description:"",avgRating:0,cover:"",url:"",starRatingCount:0,textReviewCount:0,talkScore:0},activeOne:!1,activeTwo:!1,activeThree:!1,activeFour:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.authorSubmit)}},{key:"componentDidUpdate",value:function(e){this.props.authorSubmit!==e.authorSubmit&&this.getData(this.props.authorSubmit)}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper resultContainer clearfix"},n.a.createElement("h2",null,"Highest vs. Lowest Rated"),n.a.createElement("div",{className:"bookHero borderAccent"},n.a.createElement("h3",null,"Highest Rated"),n.a.createElement("div",{className:this.state.activeOne?"flipper":"noFlipper"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"front face"},n.a.createElement("div",{className:"bookStats"},n.a.createElement("h4",null,"".concat(this.state.highBook.title)),n.a.createElement("p",null," Year: ",n.a.createElement("span",null,"".concat(this.state.highBook.year))),n.a.createElement("p",null," Average Rating: ",n.a.createElement("span",null,"".concat(this.state.highBook.avgRating))),n.a.createElement("p",null," Number of Star Rating: ",n.a.createElement("span",null,"".concat(this.state.highBook.starRatingCount))),n.a.createElement("p",null,"Number of Text Reviews: ",n.a.createElement("span",null,"".concat(this.state.highBook.textReviewCount)))),n.a.createElement("div",{className:"talkScoreContainer clearfix"},n.a.createElement("div",{className:"talkScore",onClick:this.onClick,id:"activeThree",value:this.state.activeThree},n.a.createElement("p",null,"Talk Score:"),n.a.createElement("p",null,"".concat(this.state.highBook.talkScore)),n.a.createElement("i",{className:"fas fa-question"}))),n.a.createElement("p",{className:this.state.activeThree?"show description":"hidden description"},"How much are readers discussing this book? This is the ratio of text reviews to starred ratings, multiplied by one hundred."),n.a.createElement("button",{className:"descriptionButton",id:"activeOne",onClick:this.onClick},"Description")),n.a.createElement("div",{onClick:this.onClick,className:this.state.activeOne?"noFlipper back face center":"flipper back face center"},n.a.createElement("h4",null,"Description: "),n.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:this.state.highBook.description}}),n.a.createElement("button",{className:"returnButton",id:"activeOne",onClick:this.onClick},"Return"))))),n.a.createElement("div",{className:"bookHero borderAccent"},n.a.createElement("h3",null,"Lowest Rated"),n.a.createElement("div",{className:this.state.activeTwo?"flipper":"noFlipper"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"front face"},n.a.createElement("div",{className:"bookStats"},n.a.createElement("h4",null,"".concat(this.state.lowBook.title)),n.a.createElement("p",null," Year: ",n.a.createElement("span",null,"".concat(this.state.lowBook.year))),n.a.createElement("p",null," Average Rating: ",n.a.createElement("span",null,"".concat(this.state.lowBook.avgRating))),n.a.createElement("p",null," Number of Star Rating: ",n.a.createElement("span",null,"".concat(this.state.lowBook.starRatingCount))),n.a.createElement("p",null,"Number of Text Reviews: ",n.a.createElement("span",null,"".concat(this.state.lowBook.textReviewCount)))),n.a.createElement("div",{className:"talkScoreContainer clearfix"},n.a.createElement("div",{className:"talkScore",onClick:this.onClick,id:"activeFour"},n.a.createElement("p",null,"Talk Score:"),n.a.createElement("p",null,"".concat(this.state.lowBook.talkScore)),n.a.createElement("i",{className:"fas fa-question"}))),n.a.createElement("p",{className:this.state.activeFour?"show description":"hidden description"},"How much are readers discussing this book? This is the ratio of text reviews to starred ratings, multiplied by one hundred."),n.a.createElement("button",{className:"descriptionButton",id:"activeTwo",onClick:this.onClick},"Description")),n.a.createElement("div",{className:this.state.activeTwo?"noFlipper back face center":"flipper back face center",onClick:this.onClickTwo},n.a.createElement("h4",null,"Description: "),n.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:this.state.lowBook.description}}),n.a.createElement("button",{className:"returnButton",id:"activeTwo",onClick:this.onClick},"Return"))))),n.a.createElement("div",{className:"chartContainer"},n.a.createElement(y,{years:this.state.yearsArray,ratings:this.state.ratingsArray})),n.a.createElement(p.a,{to:"/",className:"button"},"Search again?"))}}]),t}(r.Component),S=Object(v.a)(_),A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.props.history)},action:""},n.a.createElement("label",{className:"visuallyhidden",htmlFor:"text"},"Enter Author Name: "),n.a.createElement("input",{className:"searchField",onChange:this.props.handleChange,value:this.props.authorSearch,type:"text",id:"authorSearch",placeholder:"Enter author name",required:!0}),n.a.createElement("input",{className:"button",type:"submit",value:"SEARCH"}))}}]),t}(r.Component),N=Object(v.a)(A),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t,a){t.preventDefault(),a.push("/bookresults"),e.setState({authorSubmit:e.state.authorSearch})},e.state={authorSearch:"",authorSubmit:""},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("header",{className:"mainHeader"},n.a.createElement("h1",{className:"title animated flipInX delay-0.7s"},"VERSVS"),n.a.createElement("p",{class:"introCopy"},"Compare your favourite author's highest and lowest rated books. See where they peaked and plunged throughout their literary career."),n.a.createElement(N,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,authorSearch:this.state.authorSearch}))),n.a.createElement("div",{className:"wrapper"},n.a.createElement(g.a,{path:"/bookresults",render:function(){return n.a.createElement(S,{authorSubmit:e.state.authorSubmit})}})),n.a.createElement("footer",null,n.a.createElement("p",null,"SabreHawk ",n.a.createElement("span",null,"&")," Baggins est. 2018"),n.a.createElement("p",{className:"attribution"},"Made with the  ",n.a.createElement("a",{href:"https://www.goodreads.com/"},"Goodreads")," API"))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,a){},88:function(e,t,a){e.exports=a(266)},93:function(e,t,a){},96:function(e,t,a){}},[[88,2,1]]]);
//# sourceMappingURL=main.b12181a3.chunk.js.map