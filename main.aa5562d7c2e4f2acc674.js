(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/S/S":function(e,t,n){},"7Fp5":function(e,t,n){},BAeQ:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                    <li class="genres-list__item">'+e.escapeExpression(e.lambda(null!=t?r(t,"name"):t,t))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var r,l,o=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u="function",s=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<h2 class="film__title">'+s(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:c)===u?l.call(o,{name:"title",hash:{},data:i,loc:{start:{line:1,column:24},end:{line:1,column:33}}}):l)+'\n    <span class="film__year">('+s(typeof(l=null!=(l=d(n,"year")||(null!=t?d(t,"year"):t))?l:c)===u?l.call(o,{name:"year",hash:{},data:i,loc:{start:{line:2,column:30},end:{line:2,column:38}}}):l)+")</span>\n</h2>\n<table>\n    <tbody>\n        <tr>\n            <th>vote / votes</th>\n            <td>"+s(typeof(l=null!=(l=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?l:c)===u?l.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:8,column:16},end:{line:8,column:32}}}):l)+" / "+s(typeof(l=null!=(l=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?l:c)===u?l.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:8,column:35},end:{line:8,column:49}}}):l)+"</td>\n        </tr>\n        <tr>\n            <th>popularity</th>\n            <td>"+s(typeof(l=null!=(l=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?l:c)===u?l.call(o,{name:"popularity",hash:{},data:i,loc:{start:{line:12,column:16},end:{line:12,column:30}}}):l)+"</td>\n        </tr>\n        <tr>\n            <th>original title</th>\n            <td>"+s(typeof(l=null!=(l=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?l:c)===u?l.call(o,{name:"original_title",hash:{},data:i,loc:{start:{line:16,column:16},end:{line:16,column:34}}}):l)+'</td>\n        </tr>\n        <tr>\n            <th>genre</th>\n            <td>\n                <ul class="genres-list">\n'+(null!=(r=d(n,"each").call(o,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:22,column:20},end:{line:24,column:29}}}))?r:"")+'                </ul>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<h3 class="about-title">About</h3>\n<p class="overview">'+s(typeof(l=null!=(l=d(n,"overview")||(null!=t?d(t,"overview"):t))?l:c)===u?l.call(o,{name:"overview",hash:{},data:i,loc:{start:{line:31,column:20},end:{line:31,column:32}}}):l)+"</p>"},useData:!0})},DROT:function(e,t,n){},JvjU:function(e,t,n){},P1tx:function(e,t,n){},PSMI:function(e,t,n){},"Q/k7":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var r,l=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<img src="http://image.tmdb.org/t/p/w500'+c("function"==typeof(r=null!=(r=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?r:o)?r.call(l,{name:"poster_path",hash:{},data:i,loc:{start:{line:1,column:40},end:{line:1,column:55}}}):r)+'" alt="'+c("function"==typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:o)?r.call(l,{name:"title",hash:{},data:i,loc:{start:{line:1,column:62},end:{line:1,column:71}}}):r)+'" />'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("JvjU");var a=n("czhI"),i=n.n(a),r="https://api.themoviedb.org/3",l="439ac864a5c69601bb623922fef06c13",o=function(e){return i.a.get(e).then((function(e){return e.data})).catch((function(e){throw e}))},c=function(e){return o(r+"/movie/popular?api_key="+l+"&page="+e)},u=function(e,t){return o(r+"/search/movie?api_key="+l+"&query="+t+"&page="+e+"&include_adult=false")},s=function(e){return o(r+"/movie/"+e+"?api_key="+l)},d=function(e){return o(r+"/movie/"+e+"/videos?api_key="+l)},m=(n("JBxO"),n("FdtR"),n("QDHd"),n("hi3g"),n("lYjL"),n("IlJM"),n("wCa+"),n("Muwe"),n("y89P"),n("BAeQ")),f=n.n(m),p=n("Q/k7"),h=n.n(p),g=function(e){var t=e.release_date;return new Date(t).getFullYear()},v={homePageGallery:document.querySelector(".js-main-page"),formInput:document.querySelector(".formSearch"),input:document.querySelector(".inputSearch"),divPagination:document.querySelector(".pagination"),prevBtn:document.querySelector("#prev"),nextBtn:document.querySelector("#next"),numberPage:document.querySelector(".numberPage"),divPaginationLib:document.querySelector(".paginationLib"),prevBtnLib:document.querySelector("#prevLib"),nextBtnLib:document.querySelector("#nextLib"),numberPageLib:document.querySelector(".numberPageLib"),errorDiv:document.querySelector(".errorPage"),errorLib:document.querySelector(".errorPageLib"),navHome:document.querySelector(".js-link-to-home"),navLibrary:document.querySelector(".js-link-to-myLibrary"),mainPage:document.querySelector(".main-page"),mainLibrary:document.querySelector(".library"),mainDetailsPage:document.querySelector(".details-page"),btnToWatched:document.querySelector('button[data-target="toWatched"]'),btnToQueue:document.querySelector('button[data-target="toQueue"]'),logo:document.querySelector(".js-logo-block"),divButtons:document.querySelector("#buttonsMyFilm"),btnUp:document.querySelector(".footer-btnUp"),libraryGallery:document.querySelector(".library-list"),buttWatch:document.querySelector(".watch"),buttQue:document.querySelector(".queue"),imgDetailsWrapper:document.querySelector(".img-wrapper"),infoDetailsBox:document.querySelector(".info-box"),spinner:document.querySelector(".loader"),errorPage:document.querySelector(".error-page"),player:document.querySelector("#trailer")},b=function(){v.spinner.classList.remove("is-hidden")},y=function(){v.spinner.classList.add("is-hidden")},L={},P=function(e){d(e).then((function(e){var t="https://www.youtube.com/embed/"+e.results[0].key;v.player.setAttribute("src",t)}))},S=function(){var e=w(L.id),t=e?"Delete from queue":"Add to queue",n=e?"icon-add-queue":"icon-remove-queue",a=e?"icon-remove-queue":"icon-add-queue";v.btnToQueue.classList.replace(n,a),v.btnToQueue.textContent=t,v.btnToQueue.dataset.action=e?"del":"add";var i=N(L.id),r=i?"Delete from watched":"Add to watched",l=i?"icon-add-watched":"icon-remove-watched",o=i?"icon-remove-watched":"icon-add-watched";v.btnToWatched.classList.replace(l,o),v.btnToWatched.textContent=r,v.btnToWatched.dataset.action=i?"del":"add"},w=function(e){return E.getFilmsQueue().find((function(t){return t.id===e}))},N=function(e){return E.getFilmsWatched().find((function(t){return t.id===e}))},q=function(e){b(),s(e).then((function(e){L=Object.assign({},e),k(e)})).catch((function(e){return console.error(e)})).finally((function(){y(),S()}))},k=function(e){var t=Object.assign({},e,{year:g(e)});v.imgDetailsWrapper.insertAdjacentHTML("beforeend",h()(t)),v.infoDetailsBox.insertAdjacentHTML("beforeend",f()(t))},x=function(e,t){switch(e.action){case"add":return t.concat([L]);case"del":return t.filter((function(e){return e.id!==L.id}))}},Q=function(e){var t=e.target,n=x(t.dataset,E.getFilmsWatched());window.localStorage.setItem("filmsWatched",JSON.stringify(n)),E.setFilmsWatched(),S()},_=function(e){var t=e.target,n=x(t.dataset,E.getFilmsQueue());window.localStorage.setItem("filmsQueue",JSON.stringify(n)),E.setFilmsQueue(),S()},W=function(e){try{return null!==JSON.parse(window.localStorage.getItem(e))?JSON.parse(window.localStorage.getItem(e)):[]}catch(e){return[]}},E={pageNumber:1,filmsQueue:[],filmsWatched:[],getPageNumber:function(){return this.pageNumber},resetPageNumber:function(){this.pageNumber=1},incrementPageNumber:function(){this.pageNumber+=1},decrementPageNumber:function(){this.pageNumber-=1},getFilmsQueue:function(){return this.filmsQueue},setFilmsQueue:function(){this.filmsQueue=W("filmsQueue")},getFilmsWatched:function(){return this.filmsWatched},setFilmsWatched:function(){this.filmsWatched=W("filmsWatched")}},T=(n("8cZI"),n("lmye"),n("yqaG")),D=n.n(T),F=function(e){return e.map((function(e){var t=Object.assign({},e,{year:g(e)});return D()(t)})).join("")};function B(e){var t=e.results,n=e.total_pages;if(v.divPagination.classList.remove("displayNone"),1===n?v.divPagination.classList.add("displayNone"):v.nextBtn.classList.remove("hidden"),n===E.getPageNumber()?v.nextBtn.classList.add("hidden"):v.nextBtn.classList.remove("hidden"),1===E.getPageNumber()&&v.prevBtn.classList.add("hidden"),0===t.length)return v.errorDiv.classList.remove("displayNone"),v.divPagination.classList.add("displayNone"),void(v.homePageGallery.innerHTML="");v.homePageGallery.innerHTML="",v.errorDiv.classList.add("displayNone"),v.homePageGallery.insertAdjacentHTML("beforeend",F(t)),window.scrollTo(0,0)}n("RtS0"),n("3dw1");var M,j=function(){v.errorPage.classList.remove("is-hidden"),v.mainPage.classList.add("is-hidden"),v.mainLibrary.classList.add("is-hidden"),v.mainDetailsPage.classList.add("is-hidden")},O=function(){v.errorPage.classList.add("is-hidden")},G=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})};function H(e,t){t?function(e,t){b(),u(e,t).then((function(e){B(e),v.numberPage.textContent=E.getPageNumber()+" - "+e.total_pages})).catch((function(e){v.errorDiv.classList.remove("displayNone"),v.divPagination.classList.add("displayNone"),j()})).finally((function(){y()}))}(e,t):ue(e)}function A(e){e.preventDefault(),E.resetPageNumber(),M=e.target.elements[1].value,v.input.value="",H(E.getPageNumber(),M)}function C(e){if(1===E.getPageNumber()&&v.prevBtn.classList.add("hidden"),"prev"===e.target.id&&E.getPageNumber()>1)E.decrementPageNumber();else{if("next"!==e.target.id)return;v.prevBtn.classList.remove("hidden"),v.numberPage.classList.remove("hidden"),E.incrementPageNumber()}H(E.getPageNumber(),M),v.numberPage.textContent=""+E.getPageNumber(),G()}v.numberPage.textContent=""+E.getPageNumber(),1===E.getPageNumber()&&v.prevBtn.classList.add("hidden");var I,J=function(e,t){z=6,I=1,v.errorLib.classList.add("displayNone");var n=e.filter((function(e,t){if(t<=5)return e}));if(e.length>0)v.divPaginationLib.classList.remove("displayNone"),v.prevBtnLib.classList.add("hidden"),v.nextBtnLib.classList.remove("hidden"),v.numberPageLib.textContent="1 - "+Math.ceil(e.length/6),e.length<=6?v.divPaginationLib.classList.add("displayNone"):v.divPaginationLib.classList.remove("displayNone"),v.libraryGallery.insertAdjacentHTML("beforeend",F(n));else{var a="You don't have any movies in "+t+" library. Add them.";v.errorLib.textContent=a,v.errorLib.classList.remove("displayNone"),v.divPaginationLib.classList.add("displayNone")}},U=function(e,t,n){v.libraryGallery.innerHTML="",e.classList.add("active-but-lib"),t.classList.remove("active-but-lib"),J(n,e.dataset.target)};v.prevBtnLib.classList.add("hidden");var R,Y,z=6;function Z(e){e.preventDefault(),V(v.mainPage,[v.mainLibrary,v.mainDetailsPage]),ce(),ne(),le(),oe()}function K(e){V(v.mainDetailsPage,[v.mainPage,v.mainLibrary]),function(e){q(e),P(e)}(e),ie(),re(),le()}v.divPaginationLib.addEventListener("click",(function(e){if(e.preventDefault(),v.buttWatch.classList.contains("active-but-lib"))R=E.getFilmsWatched().length,Y=E.getFilmsWatched();else{if(!v.buttQue.classList.contains("active-but-lib"))return;Y=E.getFilmsQueue(),R=E.getFilmsQueue().length}var t=Math.ceil(R/6);if("prevLib"===e.target.id&&z>6){v.libraryGallery.innerHTML="";var n=Y.filter((function(e,t){if(t<z-6&&t>=z-12)return e}));v.libraryGallery.insertAdjacentHTML("beforeend",F(n)),function(){if(z>=6)z-=6;else if(0===z);}()}else{if(!("nextLib"===e.target.id&&z<=R))return;v.libraryGallery.innerHTML="";var a=Y.filter((function(e,t){if(t>z-1&&t<z+6)return e}));v.libraryGallery.insertAdjacentHTML("beforeend",F(a)),z+=6}(I=z/6)>1?v.prevBtnLib.classList.remove("hidden"):v.prevBtnLib.classList.add("hidden"),I===t?v.nextBtnLib.classList.add("hidden"):v.nextBtnLib.classList.remove("hidden"),v.numberPageLib.textContent=I+" - "+t})),v.navHome.addEventListener("click",Z),v.navLibrary.addEventListener("click",(function(e){e.preventDefault(),V(v.mainLibrary,[v.mainPage,v.mainDetailsPage]),ce(),v.libraryGallery.innerHTML="",J(E.getFilmsQueue(),"queue"),v.buttQue.classList.add("active-but-lib"),v.buttWatch.classList.remove("active-but-lib"),ae(),re(),oe()})),v.logo.addEventListener("click",Z),v.btnUp.addEventListener("click",G),E.setFilmsQueue(),E.setFilmsWatched();var V=function(e,t){e.classList.contains("is-hidden")&&e.classList.remove("is-hidden"),t.forEach((function(e){return e.classList.add("is-hidden")})),O()},X=function(e){var t=e.target;"ul"!==t.localName&&K(t.parentElement.children[2].dataset.id)},$=function(e){var t=e.target;"ul"!==t.localName&&K(t.parentElement.children[2].dataset.id)},ee=function(e){var t=e.target;U(t,v.buttWatch,E.getFilmsQueue())},te=function(e){var t=e.target;U(t,v.buttQue,E.getFilmsWatched())},ne=function(){v.homePageGallery.addEventListener("click",X),v.divPagination.addEventListener("click",C),v.formInput.addEventListener("submit",A)},ae=function(){v.buttQue.addEventListener("click",ee),v.buttWatch.addEventListener("click",te),v.libraryGallery.addEventListener("click",$)},ie=function(){v.btnToQueue.addEventListener("click",_),v.btnToWatched.addEventListener("click",Q)},re=function(){v.homePageGallery.removeEventListener("click",X),v.divPagination.removeEventListener("click",C),v.formInput.removeEventListener("submit",A)},le=function(){v.buttQue.removeEventListener("click",ee),v.buttWatch.removeEventListener("click",te),v.libraryGallery.removeEventListener("click",$)},oe=function(){v.btnToQueue.removeEventListener("click",_),v.btnToWatched.removeEventListener("click",Q)},ce=function(){v.imgDetailsWrapper.innerHTML="",v.infoDetailsBox.innerHTML=""};function ue(e){b(),c(e).then((function(e){B(e),v.numberPage.textContent=E.getPageNumber()+" - "+e.total_pages})).catch((function(e){j(),console.log(e)})).finally((function(){y()}))}ue(E.getPageNumber()),window.addEventListener("DOMContentLoaded",Z);n("WmQ0"),n("/S/S"),n("PSMI"),n("k6OA"),n("7Fp5"),n("m8Ev"),n("DROT"),n("P1tx"),n("ghta")},WmQ0:function(e,t,n){},ghta:function(e,t,n){},k6OA:function(e,t,n){},m8Ev:function(e,t,n){},yqaG:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var r,l=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,c="function",u=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="itemFilm">\n  <h2 class="itemFilm_title">'+u(typeof(r=null!=(r=s(n,"title")||(null!=t?s(t,"title"):t))?r:o)===c?r.call(l,{name:"title",hash:{},data:i,loc:{start:{line:2,column:29},end:{line:2,column:38}}}):r)+" ("+u(typeof(r=null!=(r=s(n,"year")||(null!=t?s(t,"year"):t))?r:o)===c?r.call(l,{name:"year",hash:{},data:i,loc:{start:{line:2,column:40},end:{line:2,column:48}}}):r)+')</h2>\n  <div class="card_rating">'+u(typeof(r=null!=(r=s(n,"vote_average")||(null!=t?s(t,"vote_average"):t))?r:o)===c?r.call(l,{name:"vote_average",hash:{},data:i,loc:{start:{line:3,column:27},end:{line:3,column:43}}}):r)+'</div>\n  <img src="http://image.tmdb.org/t/p/w500'+u(typeof(r=null!=(r=s(n,"poster_path")||(null!=t?s(t,"poster_path"):t))?r:o)===c?r.call(l,{name:"poster_path",hash:{},data:i,loc:{start:{line:4,column:42},end:{line:4,column:57}}}):r)+'" alt="'+u(typeof(r=null!=(r=s(n,"title")||(null!=t?s(t,"title"):t))?r:o)===c?r.call(l,{name:"title",hash:{},data:i,loc:{start:{line:4,column:64},end:{line:4,column:73}}}):r)+'" class="card__movie" data-id="'+u(typeof(r=null!=(r=s(n,"id")||(null!=t?s(t,"id"):t))?r:o)===c?r.call(l,{name:"id",hash:{},data:i,loc:{start:{line:4,column:104},end:{line:4,column:110}}}):r)+'" />\n</li>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.aa5562d7c2e4f2acc674.js.map