(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/S/S":function(e,t,n){},"7Fp5":function(e,t,n){},BAeQ:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                    <li class="genres-list__item">'+e.escapeExpression(e.lambda(null!=t?l(t,"name"):t,t))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l,r,o=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u="function",s=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<h2 class="film__title">'+s(typeof(r=null!=(r=d(n,"title")||(null!=t?d(t,"title"):t))?r:c)===u?r.call(o,{name:"title",hash:{},data:i,loc:{start:{line:1,column:24},end:{line:1,column:33}}}):r)+'\n    <span class="film__year">('+s(typeof(r=null!=(r=d(n,"year")||(null!=t?d(t,"year"):t))?r:c)===u?r.call(o,{name:"year",hash:{},data:i,loc:{start:{line:2,column:30},end:{line:2,column:38}}}):r)+")</span>\n</h2>\n<table>\n    <tbody>\n        <tr>\n            <th>vote / votes</th>\n            <td>"+s(typeof(r=null!=(r=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?r:c)===u?r.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:8,column:16},end:{line:8,column:32}}}):r)+" / "+s(typeof(r=null!=(r=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?r:c)===u?r.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:8,column:35},end:{line:8,column:49}}}):r)+"</td>\n        </tr>\n        <tr>\n            <th>popularity</th>\n            <td>"+s(typeof(r=null!=(r=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?r:c)===u?r.call(o,{name:"popularity",hash:{},data:i,loc:{start:{line:12,column:16},end:{line:12,column:30}}}):r)+"</td>\n        </tr>\n        <tr>\n            <th>original title</th>\n            <td>"+s(typeof(r=null!=(r=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?r:c)===u?r.call(o,{name:"original_title",hash:{},data:i,loc:{start:{line:16,column:16},end:{line:16,column:34}}}):r)+'</td>\n        </tr>\n        <tr>\n            <th>genre</th>\n            <td>\n                <ul class="genres-list">\n'+(null!=(l=d(n,"each").call(o,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:22,column:20},end:{line:24,column:29}}}))?l:"")+'                </ul>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<h3 class="about-title">About</h3>\n<p class="overview">'+s(typeof(r=null!=(r=d(n,"overview")||(null!=t?d(t,"overview"):t))?r:c)===u?r.call(o,{name:"overview",hash:{},data:i,loc:{start:{line:31,column:20},end:{line:31,column:32}}}):r)+"</p>"},useData:!0})},DROT:function(e,t,n){},JvjU:function(e,t,n){},L1EO:function(e,t,n){},P1tx:function(e,t,n){},PSMI:function(e,t,n){},"Q/k7":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l,r=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<img src="http://image.tmdb.org/t/p/w500'+c("function"==typeof(l=null!=(l=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?l:o)?l.call(r,{name:"poster_path",hash:{},data:i,loc:{start:{line:1,column:40},end:{line:1,column:55}}}):l)+'" alt="'+c("function"==typeof(l=null!=(l=u(n,"title")||(null!=t?u(t,"title"):t))?l:o)?l.call(r,{name:"title",hash:{},data:i,loc:{start:{line:1,column:62},end:{line:1,column:71}}}):l)+'" />'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("JvjU");var a,i=n("czhI"),l=n.n(i),r="https://api.themoviedb.org/3",o="439ac864a5c69601bb623922fef06c13",c=function(e){return l.a.get(e).then((function(e){return e.data})).catch((function(e){throw e}))},u=function(e){return c(r+"/movie/popular?api_key="+o+"&page="+e)},s=function(e,t){return c(r+"/search/movie?api_key="+o+"&query="+t+"&page="+e+"&include_adult=false")},d=function(e){return c(r+"/movie/"+e+"?api_key="+o)},m=(n("JBxO"),n("FdtR"),n("QDHd"),n("hi3g"),n("lYjL"),n("IlJM"),n("wCa+"),n("Muwe"),n("y89P"),n("BAeQ")),p=n.n(m),h=n("Q/k7"),f=n.n(h),v=function(e){var t=e.release_date;return new Date(t).getFullYear()},g={homePageGallery:document.querySelector(".js-main-page"),formInput:document.querySelector(".formSearch"),input:document.querySelector(".inputSearch"),divPagination:document.querySelector(".pagination"),prevBtn:document.querySelector("#prev"),nextBtn:document.querySelector("#next"),numberPage:document.querySelector(".numberPage"),errorDiv:document.querySelector(".errorSearch"),navHome:document.querySelector(".js-link-to-home"),navLibrary:document.querySelector(".js-link-to-myLibrary"),mainPage:document.querySelector(".main-page"),mainLibrary:document.querySelector(".library"),mainDetailsPage:document.querySelector(".details-page"),btnToWatched:document.querySelector('button[data-target="toWatched"]'),btnToQueue:document.querySelector('button[data-target="toQueue"]'),logo:document.querySelector(".js-logo-block"),libraryGallery:document.querySelector(".library-list"),buttWatch:document.querySelector(".watch"),buttQue:document.querySelector(".queue"),imgDetailsWrapper:document.querySelector(".img-wrapper"),infoDetailsBox:document.querySelector(".info-box"),spinner:document.querySelector(".loader")},y=function(){g.spinner.classList.remove("is-hidden")},b=function(){g.spinner.classList.add("is-hidden")},L={},P=function(){var e=k(L.id),t=e?"Delete from queue":"Add to queue",n=e?"icon-add-queue":"icon-remove-queue",a=e?"icon-remove-queue":"icon-add-queue";g.btnToQueue.classList.replace(n,a),g.btnToQueue.textContent=t,g.btnToQueue.dataset.action=e?"del":"add";var i=w(L.id),l=i?"Delete from watched":"Add to watched",r=i?"icon-add-watched":"icon-remove-watched",o=i?"icon-remove-watched":"icon-add-watched";g.btnToWatched.classList.replace(r,o),g.btnToWatched.textContent=l,g.btnToWatched.dataset.action=i?"del":"add"},k=function(e){return q.getFilmsQueue().find((function(t){return t.id===e}))},w=function(e){return q.getFilmsWatched().find((function(t){return t.id===e}))},N=function(e){y(),d(e).then((function(e){L=Object.assign({},e),S(e)})).catch((function(e){return console.error(e)})).finally((function(){b(),P()}))},S=function(e){var t=Object.assign({},e,{year:v(e)});g.imgDetailsWrapper.insertAdjacentHTML("beforeend",f()(t)),g.infoDetailsBox.insertAdjacentHTML("beforeend",p()(t))},E=function(e,t){switch(e.action){case"add":return t.concat([L]);case"del":return t.filter((function(e){return e.id!==L.id}))}},Q=function(e){var t=e.target,n=E(t.dataset,q.getFilmsWatched());window.localStorage.setItem("filmsWatched",JSON.stringify(n)),q.setFilmsWatched(),P()},W=function(e){var t=e.target,n=E(t.dataset,q.getFilmsQueue());window.localStorage.setItem("filmsQueue",JSON.stringify(n)),q.setFilmsQueue(),P()},_=function(e){try{return null===JSON.parse(window.localStorage.getItem(e))?JSON.parse(window.localStorage.getItem(e)):[]}catch(e){return[]}},q={pageNumber:1,filmsQueue:[],filmsWatched:[],getPageNumber:function(){return this.pageNumber},resetPageNumber:function(){this.pageNumber=1},incrementPageNumber:function(){this.pageNumber+=1},decrementPageNumber:function(){this.pageNumber-=1},getFilmsQueue:function(){return this.filmsQueue},setFilmsQueue:function(){this.filmsQueue=_("filmsQueue")},getFilmsWatched:function(){return this.filmsWatched},setFilmsWatched:function(){this.filmsWatched=_("filmsWatched")}},D=(n("8cZI"),n("lmye"),n("yqaG")),x=n.n(D),T=function(e){return e.map((function(e){var t=Object.assign({},e,{year:v(e)});return x()(t)})).join("")};function O(e){var t=e.results,n=e.total_pages;if(1===n?g.divPagination.classList.add("displayNone"):g.nextBtn.classList.remove("displayNone"),n===q.getPageNumber()?g.nextBtn.classList.add("displayNone"):g.nextBtn.classList.remove("displayNone"),1===q.getPageNumber()&&g.prevBtn.classList.add("displayNone"),0===t.length)return g.errorDiv.classList.remove("displayNone"),void(g.homePageGallery.innerHTML="");g.homePageGallery.innerHTML="",g.errorDiv.classList.add("displayNone"),g.homePageGallery.insertAdjacentHTML("beforeend",T(t))}function j(e,t){t?function(e,t){y(),s(e,t).then((function(e){return O(e)})).catch((function(e){g.errorDiv.classList.remove("displayNone")})).finally((function(){b()}))}(e,t):R(e)}function F(e){e.preventDefault(),q.resetPageNumber(),g.numberPage.textContent=""+q.getPageNumber(),a=e.target.elements[1].value,g.input.value="",j(q.getPageNumber(),a)}function M(e){if(1===q.getPageNumber()&&g.prevBtn.classList.add("displayNone"),"prev"===e.target.id&&q.getPageNumber()>1)q.decrementPageNumber();else{if("next"!==e.target.id)return;g.prevBtn.classList.remove("displayNone"),g.numberPage.classList.remove("displayNone"),q.incrementPageNumber()}j(q.getPageNumber(),a),g.numberPage.textContent=""+q.getPageNumber(),window.scrollTo({top:0,left:0,behavior:"smooth"})}g.numberPage.textContent=""+q.getPageNumber(),1===q.getPageNumber()&&g.prevBtn.classList.add("displayNone");var B=function(e,t){if(e)g.libraryGallery.innerHTML=T(e);else{var n="You do not have to "+t+" movies to watch. Add them.";console.log(n)}},G=function(e,t,n){g.libraryGallery.innerHTML="",e.classList.add("active-but-lib"),t.classList.remove("active-but-lib"),B(n,e.dataset.target)};function H(e){e.preventDefault(),g.mainPage.classList.contains("is-hidden")&&g.mainPage.classList.remove("is-hidden"),g.mainLibrary.classList.add("is-hidden"),g.mainDetailsPage.classList.add("is-hidden"),g.imgDetailsWrapper.innerHTML="",g.infoDetailsBox.innerHTML="",g.homePageGallery.addEventListener("click",A),g.divPagination.addEventListener("click",M),g.formInput.addEventListener("submit",F),g.buttWatch.removeEventListener("click",J),g.buttQue.removeEventListener("click",Y),g.libraryGallery.removeEventListener("click",C),g.btnToQueue.removeEventListener("click",W),g.btnToWatched.removeEventListener("click",Q)}function I(e){g.mainDetailsPage.classList.contains("is-hidden")&&g.mainDetailsPage.classList.remove("is-hidden"),g.mainPage.classList.add("is-hidden"),g.mainLibrary.classList.add("is-hidden"),function(e){N(e)}(e),g.btnToQueue.addEventListener("click",W),g.btnToWatched.addEventListener("click",Q),g.homePageGallery.removeEventListener("click",A),g.divPagination.removeEventListener("click",M),g.formInput.removeEventListener("submit",F),g.buttWatch.removeEventListener("click",J),g.buttQue.removeEventListener("click",Y),g.libraryGallery.removeEventListener("click",C)}g.navHome.addEventListener("click",H),g.navLibrary.addEventListener("click",(function(e){e.preventDefault(),g.mainLibrary.classList.contains("is-hidden")&&g.mainLibrary.classList.remove("is-hidden");g.mainPage.classList.add("is-hidden"),g.mainDetailsPage.classList.add("is-hidden"),g.imgDetailsWrapper.innerHTML="",g.infoDetailsBox.innerHTML="",g.libraryGallery.innerHTML="",q.setFilmsQueue(),q.setFilmsWatched(),B(q.getFilmsQueue(),"queue"),g.buttQue.classList.add("active-but-lib"),g.buttWatch.classList.remove("active-but-lib"),g.buttQue.addEventListener("click",J),g.buttWatch.addEventListener("click",Y),g.libraryGallery.addEventListener("click",C),g.homePageGallery.removeEventListener("click",A),g.divPagination.removeEventListener("click",M),g.formInput.removeEventListener("submit",F),g.btnToQueue.removeEventListener("click",W),g.btnToWatched.removeEventListener("click",Q)})),g.logo.addEventListener("click",H);var A=function(e){return I(e.target.dataset.id)},C=function(e){return I(e.target.dataset.id)},J=function(e){var t=e.target;G(t,g.buttWatch,q.getFilmsQueue())},Y=function(e){var t=e.target;G(t,g.buttQue,q.getFilmsWatched())};function R(e){y(),u(e).then((function(e){O(e)})).catch((function(e){console.log(e)})).finally((function(){b()}))}R(q.getPageNumber()),window.addEventListener("DOMContentLoaded",H);n("WmQ0"),n("/S/S"),n("PSMI"),n("k6OA"),n("7Fp5"),n("m8Ev"),n("DROT"),n("P1tx")},WmQ0:function(e,t,n){},k6OA:function(e,t,n){},m8Ev:function(e,t,n){},yqaG:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l,r=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,c="function",u=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="itemFilm">\n    <h2 class="itemFilm_title">'+u(typeof(l=null!=(l=s(n,"title")||(null!=t?s(t,"title"):t))?l:o)===c?l.call(r,{name:"title",hash:{},data:i,loc:{start:{line:2,column:31},end:{line:2,column:40}}}):l)+'\n        <span class="filmYear">('+u(typeof(l=null!=(l=s(n,"year")||(null!=t?s(t,"year"):t))?l:o)===c?l.call(r,{name:"year",hash:{},data:i,loc:{start:{line:3,column:32},end:{line:3,column:40}}}):l)+')</span>\n    </h2>\n    <div class="card_rating">'+u(typeof(l=null!=(l=s(n,"vote_average")||(null!=t?s(t,"vote_average"):t))?l:o)===c?l.call(r,{name:"vote_average",hash:{},data:i,loc:{start:{line:5,column:29},end:{line:5,column:45}}}):l)+'</div>\n    <img src="http://image.tmdb.org/t/p/w500'+u(typeof(l=null!=(l=s(n,"poster_path")||(null!=t?s(t,"poster_path"):t))?l:o)===c?l.call(r,{name:"poster_path",hash:{},data:i,loc:{start:{line:6,column:44},end:{line:6,column:59}}}):l)+'" alt="'+u(typeof(l=null!=(l=s(n,"title")||(null!=t?s(t,"title"):t))?l:o)===c?l.call(r,{name:"title",hash:{},data:i,loc:{start:{line:6,column:66},end:{line:6,column:75}}}):l)+'" class="card__movie" data-id="'+u(typeof(l=null!=(l=s(n,"id")||(null!=t?s(t,"id"):t))?l:o)===c?l.call(r,{name:"id",hash:{},data:i,loc:{start:{line:6,column:106},end:{line:6,column:112}}}):l)+'" />\n</li>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a7609258411fc9aaae4d.js.map