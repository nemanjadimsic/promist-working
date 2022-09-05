(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/changepassword/changepassword.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/changepassword/changepassword.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Promena lozinke</h2>\n        <hr>\n    </div>\n\n    <div class=\"form-group col-md-4\">\n        <label>Nova lozinka</label>\n        <input type=\"password\" [formControl]=\"prvi_pass\" class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-4\">\n        <label>Ponovite lozinku</label>\n        <input type=\"password\" [formControl]=\"drugi_pass\" class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-4\">\n        <p style=\"color: red\" *ngIf=\"msg\"> Lozinke se ne podudaraju, pokušajte ponovo.</p>     \n    </div>\n\n    <div class=\"form-group col-md-4\">\n            <button type=\"submit\" class=\"btn btn-primary mb-4\" (click)=\"addButton()\"> Promeni </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/construction/construction.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/construction/construction.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 30px auto; text-align: center;\">\n        <div >\n            <h2>Aplikacija je trenutno offline zbog radova.\n                <br>\n                Očekivano vreme ažuriranja i osposobljavanja:\n                <br>\n                01.12.2019. 22:00\n            </h2>\n        </div>\n        <img src=\"../../../assets/const.PNG\" alt=\"\" width=\"600px\" height=\"400px\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/djubrivo/djubrivo.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/djubrivo/djubrivo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Djubrivo</h2>\n        <hr>\n    </div>\n\n    <div class=\"form-group col-md-4\">\n            <label>Naziv djubriva</label>\n            <input type=\"text\" [formControl]=\"form_naziv\" class=\"form-control\">\n     </div>\n\n     <div class=\"form-group col-md-4\">\n            <p style=\"color: red\" *ngIf=\"msg\"> Molim Vas unesti naziv novog djubriva.</p>     \n     </div>\n    \n     <div class=\"form-group col-md-4\">\n            <button type=\"submit\" class=\"btn btn-primary mb-4\" (click)=\"addButton()\"> Dodaj </button>\n     </div>\n     \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/homepage/homepage.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/homepage/homepage.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container mt-4\">\r\n\r\n    <div class=\"header\">\r\n        <h2 class=\"mb-4\">Unos</h2>\r\n        <hr>\r\n    </div>\r\n\r\n    <form>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Magacin</label>\r\n                <select [formControl]=\"magacin_form\" class=\"form-control\">\r\n                    <option [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">\r\n                        {{ magacin.item_text }}\r\n                    </option>\r\n                 \r\n                </select>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group col-md-4\">\r\n                    <label>Vrsta djubriva</label>\r\n                    <select [formControl]=\"djubrivo_form\" class=\"form-control\">\r\n                        <option [value]=\"djubrivo.id\"  *ngFor=\"let djubrivo of roba\">\r\n                            {{ djubrivo.naziv }} \r\n                        </option>  \r\n                      \r\n                    </select>\r\n                </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                      <label>LOT</label>\r\n                      <select [formControl]=\"lot_form\" class=\"form-control\">\r\n                          <option [value]=\"lot.id\"  *ngFor=\"let lot of lots\">\r\n                            {{ lot.naziv }}\r\n                         </option>\r\n\r\n                      </select>\r\n                  </div>\r\n                  <div class=\"form-group col-md-4\">\r\n                        <label>Smer</label>\r\n                        <select [formControl]=\"smer_form\" class=\"form-control\">\r\n                            <!--\r\n                                <option [value]=\"smer.id\"  *ngFor=\"let smer of smerovi\">\r\n                                      smer.name\r\n                                </option>\r\n                            -->\r\n                          <option value=\"ulaz\">Ulaz</option>\r\n                          <option value=\"izlaz\">Izlaz</option>\r\n                          <!--<option value=\"pakovanje\">Pakovanje</option>-->\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Podsmer</label>\r\n                        <select [formControl]=\"podsmer_form\" class=\"form-control\">\r\n                            <!--\r\n                                <option [value]=\"smer.id\"  *ngFor=\"let smer of smerovi\">\r\n                                      smer.name\r\n                                </option>\r\n                            -->\r\n                          <option value=\"dobavljac\">Dobavljac</option>\r\n                          <option value=\"interno\">Interno</option>\r\n                          <!--<option value=\"pakovanje\">Pakovanje</option>-->\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"\">Datum</label>\r\n                        <input type=\"date\" [formControl]=\"datum\" class=\"form-control\">\r\n                    </div>\r\n          </div>\r\n\r\n          <div class=\"pakovanja\">\r\n                <h4>Pakovanja</h4>\r\n                <hr>\r\n          </div>\r\n\r\n          <div class=\"form-row\">\r\n              <div class=\"form-group col-md-4\">\r\n                    <label>25/1</label>\r\n                    <input type=\"number\" [formControl]=\"form_25\" class=\"form-control\">\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                    <label>50/1</label>\r\n                    <input type=\"number\" [formControl]=\"form_50\" class=\"form-control\">\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                    <label>500/1</label>\r\n                    <input type=\"number\" [formControl]=\"form_500\" class=\"form-control\">\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                    <label>600/1</label>\r\n                    <input type=\"number\" [formControl]=\"form_600\" class=\"form-control\">\r\n               </div>\r\n               <div class=\"form-group col-md-4\">\r\n                    <label>1000/1</label>\r\n                    <input type=\"number\" [formControl]=\"form_1000\" class=\"form-control\">\r\n               </div>\r\n               <div class=\"form-group col-md-4\">\r\n                    <label>1000/1 neegalizovano</label>\r\n                    <input type=\"number\" [formControl]=\"form_1000neegal\" class=\"form-control\">\r\n               </div>\r\n               <div class=\"form-group col-md-4\">\r\n                    <label>Rinfuza</label>\r\n                    <input type=\"number\" [formControl]=\"form_rinfuza\" class=\"form-control\">\r\n               </div>\r\n               <div class=\"form-group col-md-4\">\r\n                    <label>Vanstandardno</label>\r\n                    <input type=\"number\" [formControl]=\"form_vanstandardno\" class=\"form-control\">\r\n               </div>\r\n          </div>\r\n\r\n    </form>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary mb-4\" (click)=\"testButton()\"> Potvrdi </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/izvestajdetalj/izvestajdetalj.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/izvestajdetalj/izvestajdetalj.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Izveštaj</h2>\n        <hr>\n    </div>\n    <div class=\"form-group col-md-4\">\n        <label>Magacin</label>\n        <select [formControl]=\"magacin_form\" class=\"form-control\">\n            <option [innerHTML]=\"magacin.item_text\"  [id]=\"magacin.item_id\" [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">  \n            </option>\n         <option></option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-4\">\n            <label>Smer</label>\n            <select [formControl]=\"smer_form\" class=\"form-control\">\n                <!--\n                    <option [value]=\"smer.id\"  *ngFor=\"let smer of smerovi\">\n                          smer.name\n                    </option>\n                -->\n              <option value=\"ulaz\">Ulaz</option>\n              <option value=\"izlaz\">Izlaz</option>\n              \n              <!--<option value=\"pakovanje\">Pakovanje</option>-->\n            </select>\n        </div>\n\n        <div class=\"form-group col-md-4\">\n                <label for=\"\">Datum</label>\n                <input type=\"date\" [formControl]=\"datum\" class=\"form-control\">\n        </div>\n     <button type=\"submit\" class=\"btn btn-primary mb-4 ml-4\" (click)=\"getNaDan()\"> Izveštaj </button>\n\n     <div class=\"ml-4\" *ngIf=\"value != undefined || value != null\">\n         <h2>{{ string }} {{ value }}</h2>\n     </div>\n\n     <div class=\"ml-4\" *ngIf=\"message\">\n         <h1>Nema rezultata.</h1>\n     </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/izvestajrepro/izvestajrepro.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/izvestajrepro/izvestajrepro.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Izveštaj repromaterijal</h2>\n        <hr>\n    </div>\n    <div class=\"form-group col-md-4\">\n        <label>Magacin</label>\n        <select [formControl]=\"magacin_form\" class=\"form-control\">\n            <option [innerHTML]=\"magacin.item_text\"  [id]=\"magacin.item_id\" [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">  \n            </option>\n         <option></option>\n        </select>\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label>Datum od </label>\n        <input class=\"ml-2\" [formControl]=\"datumOd\" type=\"date\">\n      </div>\n      \n      <div  class=\"form-group col-md-4\">\n        <label>Datum do </label>\n        <input class=\"ml-2\" [formControl]=\"datumDo\"  type=\"date\">\n      </div>\n\n        \n          <div class=\"form-group col-md-4\">\n            <p style=\"color:red\" *ngIf=\"msg\">Molim Vas odabarite magacin.</p>\n            <p style=\"color:red\" *ngIf=\"nema\">Nema podataka za odabran magacin.</p>\n\n          </div>\n            <div class=\"form-group col-md-4\">\n              <button (click)=\"showTa()\" class=\"btn btn-primary\"><i class=\"far fa-file-pdf mr-2\"></i> Izveštaj</button>\n              <button *ngIf=\"showTable\" class=\"btn btn-primary ml-2\" (click)=\"downloadAsPdf()\"><i class=\"fas fa-download mr-2\"></i> Preuzmi</button>\n            </div>\n            <div class=\"form-group col-md-4\">\n              \n            </div>\n\n            \n        <div class=\"form-group col-md-4\">\n         \n            <button *ngIf=\"showTable\" (click)=\"sortByDate()\" class=\"btn btn-primary mr-2\"><span *ngIf=\"!sortex\"><i class=\"fas fa-arrow-down\"></i></span> <span *ngIf=\"sortex\"><i class=\"fas fa-arrow-up\"></i></span> Sortiraj po datumu</button>\n          \n         \n        </div>\n\n      </div>\n\n\n\n<div class=\"showtable\" *ngIf=\"showTable\">\n<div class=\"container\" id=\"topdf\">\n    <div id=\"report\" class=\" mb-4\">\n        <table class=\"table table-bordered\" id=\"tableid\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\"  *ngFor=\"let c of columns\">{{c}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let obj of obj4table;let i = index\">\n                <th scope=\"row\" *ngIf=\"i+1 != obj4table.length\">{{ i+1 }}</th>\n                <th scoper=\"row\" *ngIf=\"i+1 == obj4table.length\"><b>Konačno</b></th>\n                <td>{{obj.datum}}</td>\n                <td>{{obj.pakovanjeNaziv}}</td>\n                <td>{{obj.robaNaziv}}</td>\n                <td>{{obj.materijalNaziv}}</td>\n                <td>{{obj.smer}}</td>\n\n                <td [style.font-weight]=\"i+1 == obj4table.length ? 'bold' : 'normal'\">{{obj.kolicina}}</td>\n                <td [style.background]=\"obj.needed ? 'orange' : 'white'\"\n                    [style.background]=\"obj.urgent ? 'red' : 'white'\"\n                    [style.color]=\"obj.urgent ? 'grey' : 'black'\"\n                    [style.color]=\"obj.needed ? 'grey' : 'black'\">{{obj.novoStanje}}</td>\n                <td>{{obj.lotNaziv}}</td>\n                <td>\n                    <div *ngIf=\"!obj.hasNapomena\" class=\"form-group\">\n                      <input  [formControl]=\"napomena_form\" type=\"text\" name=\"\" id=\"\">\n                      <button  class=\"btn btn-primary ml-2\" (click)=\"addNapomena(obj)\">/</button>\n                    </div>\n                    <div *ngIf=\"obj.hasNapomena\" class=\"form-group\">\n                        {{obj.napomena}}\n                    </div>\n                    \n                    \n                </td>\n              </tr>\n            </tbody>\n          \n          </table>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/lagerlista/lagerlista.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/lagerlista/lagerlista.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Lager lista</h2>\n        <hr>\n    </div>\n\n    <div class=\"form-group col-md-6\">\n        <label>Magacin</label>\n        <!--\n        <select (change)=\"onChange($event.target.value)\" [formControl]=\"magacin_form\" class=\"form-control\">\n            <option value=\"0\">\n              Svi\n            </option>\n            <option value=\"999\">\n              Detaljno svi\n            </option>  \n          <option [innerHTML]=\"magacin.naziv\"  id=\"elementOption\" [value]=\"magacin.id\"  *ngFor=\"let magacin of magacini\">  \n            </option>\n            <option></option>\n        </select>\n        -->\n        <angular2-multiselect *ngIf=\"showDropdown\" [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\">\n          <c-item>\n                  <ng-template let-item=\"item\">\n                    <label style=\"color: #333;min-width: 150px;\">{{item.itemName}}</label>\n                   \n                  </ng-template>\n          </c-item>    \n        </angular2-multiselect>\n\n        <button class=\"btn btn-primary mt-2 mb-2 mr-2\" (click)=\"getLager()\"><i class=\"far fa-file-pdf mr-2\"></i>Lager</button>\n        <button class=\"btn btn-primary mt-2 mb-2 mr-2\" (click)=\"clearForms()\" data-toggle=\"modal\" data-target=\"#exampleModal\">Izmena stanja</button>\n        <button class=\"btn btn-primary \" (click)=\"printLager()\"><i class=\"fas fa-download mr-2\"></i>Preuzmi</button>\n    </div>\n\n    <div *ngIf=\"showTable\" id=\"report\" class=\" mb-4\">\n      <h4>{{mag}}</h4>\n        <table class=\"table table-bordered\" id=\"tableid\">\n          <thead>\n            <tr>\n              <th>Pakovanje</th>\n              <th *ngFor=\"let l of lagers\"> \n                {{l.robaNaziv}}\n              </th>\n            </tr>\n          </thead> \n            \n            <tbody>\n                <tr *ngFor=\"let a of vrednosti25; let i = index\">\n                    <th>\n                      {{a.package}}\n                    </th>\n                    <td >\n                      {{a.value}}\n                    </td>\n                    <td *ngIf=\"pedeset.length !=  0\">\n                      {{pedeset[i].value}}\n                    </td>\n                    <td *ngIf=\"map.length !=  0\">\n                      {{map[i].value}}\n                    </td>\n                    <td *ngIf=\"kcl.length !=  0\">\n                      {{kcl[i].value}}\n                    </td>\n                    <td *ngIf=\"urea.length !=  0\">\n                      {{urea[i].value}}\n                    </td>\n                    <td *ngIf=\"gran.length !=  0\">\n                        {{gran[i].value}}\n                    </td>\n                    <td *ngIf=\"san.length !=  0\">\n                        {{san[i].value}}\n                    </td>\n                    <td *ngIf=\"kan.length !=  0\">\n                        {{kan[i].value}}\n                    </td>\n                    <td *ngIf=\"amon.length !=  0\">\n                        {{amon[i].value}}\n                    </td>\n                    <td *ngIf=\"np.length !=  0\">\n                      {{np[i].value}}\n                    </td>\n                    <td *ngIf=\"ureapril.length !=  0\">\n                      {{ureapril[i].value}}\n                    </td>\n                    <td *ngIf=\"dap.length !=  0\">\n                      {{dap[i].value}}\n                    </td>\n                    <td *ngIf=\"npkFoksan.length !=  0\">\n                      {{npkFoksan[i].value}}\n                    </td>\n                    <td *ngIf=\"npk16168.length !=  0\">\n                      {{npk16168[i].value}}\n                    </td>\n                    \n                </tr>\n\n<tr>\n  <td>\n   <b>Suma</b> \n  </td>\n  <td *ngFor=\"let x of toShow; let j = index\">\n    <b>{{ x }}</b>\n  </td>\n</tr>\n\n           \n            </tbody>\n          </table>\n    </div>\n\n<!--DETALJNO SVI-->\n\n    <div id=\"detaljnijeSVI\" *ngIf=\"detaljnoSvi\">\n      <app-lagertabela *ngFor=\"let magikarp of svimagacinisvimarlepi\" [themagacin]=magikarp></app-lagertabela>\n    </div>\n\n\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Izmena stanja</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n\n            <label>Magacin *</label>\n            <select (change)=\"pakovanjeChange($event.target.value)\"  [formControl]=\"magacinizmena_form\" class=\"form-control\"> \n            <option [innerHTML]=\"magacin.item_text\"  [id]=\"magacin.item_id\" [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\"> </option>\n            </select>\n            \n            <label>Vrsta djubriva *</label>\n            <select (change)=\"pakovanjeChange($event.target.value)\" [formControl]=\"djubrivo_form\" class=\"form-control\">\n                <option [value]=\"djubrivo.id\"  *ngFor=\"let djubrivo of roba\">\n                    {{ djubrivo.naziv }} \n                </option>\n            </select>\n\n            <label>LOT *</label>\n            <select (change)=\"pakovanjeChange($event.target.value)\" [formControl]=\"lot_form\" class=\"form-control\">\n                <option [value]=\"lot.id\"  *ngFor=\"let lot of lots\">\n                  {{ lot.naziv }}\n                </option>\n            </select>\n\n            <label for=\"\">Pakovanje *</label>\n            <select (change)=\"pakovanjeChange($event.target.value)\" name=\"\" [formControl]=\"pakovanje_form\" id=\"\" class=\"form-control\">\n                <option selected value=\"0\">\n\n                </option>\n                <option value=\"1\">\n                    25/1\n                </option>\n                <option value=\"2\">\n                        50/1\n                </option>\n                <option value=\"3\">\n                        500/1\n                </option>\n                <option value=\"4\">\n                        600/1\n                </option>\n                <option value=\"5\">\n                        1000/1\n                </option>\n               \n\n            </select>\n\n            <label>Trenutna količina: </label>\n            <span *ngIf=\"trenutna == null || trenutna == undefined\"> Popunite prethodna polja...</span>\n            <b *ngIf=\"trenutna != null || trenutna != undefined\"> {{trenutna.novostanje}}</b>\n            <br>\n            <label>Nova količina *</label>\n            <input type=\"number\" [formControl]=\"novakolicina\" class=\"form-control\">\n          \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Odustani</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"azuriranje()\">Sačuvaj</button>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/lagerrepro/lagerrepro.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/lagerrepro/lagerrepro.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Lager repro materijala</h2>\n        <hr>\n    </div>\n\n\n    <div class=\"form-group col-md-4\">\n            <label>Magacin</label>\n            <select [formControl]=\"magacin_form\" class=\"form-control\">\n               \n              <option [innerHTML]=\"magacin.item_text\"  [id]=\"magacin.item_id\" [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">  \n                </option>\n                <option></option>\n            </select>\n            <button class=\"btn btn-primary mt-2 mb-2 mr-2\" (click)=\"getLager()\"><i class=\"far fa-file-pdf mr-2\"></i>Lager</button>\n            <button class=\"btn btn-primary mt-2 mb-2 mr-2\" (click)=\"clearForms()\" data-toggle=\"modal\" data-target=\"#exampleModal\">Izmena stanja</button>\n    <!--<button *ngIf=\"showTable\" class=\"btn btn-primary mt-2 mb-2 \" (click)=\"printLager(magacin)\"><i class=\"fas fa-download mr-2\"></i>Preuzmi</button>-->\n        </div>\n\n        <div *ngIf=\"showTable\" id=\"report\" class=\" mb-4\">\n                <table class=\"table table-bordered\" id=\"tableid\">\n                  <thead>\n                    <tr>\n                      <th>Crevo</th>\n                      <th *ngFor=\"let r of customcols\"> \n                        {{r}}\n                      </th>\n                    </tr>\n                  </thead> \n                    \n                    <tbody>\n                  \n                      <tr>\n                          <th>\n                              120 mikrona\n                          </th>\n                          <td *ngFor=\"let a of show120\">\n                            {{a}}\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>\n                                100 mikrona\n                            </th>\n                            <td *ngFor=\"let b of show100\">\n                              {{b}}\n                            </td>\n                        </tr>\n                </tbody>\n            </table>\n\n            <div class=\"container\" style=\"background:ivory\">\n                <div class=\"row\">\n                    <div class=\"cm-4 mr-4\" style=\"border: 2px solid black; padding:2%\">\n                        <h3>\n                                Stanje paleta:\n                            </h3>\n                            <p *ngFor=\"let a of nazivipaleta; let i = index\">\n                                Paleta {{a}} : <span style=\"color:green\">{{stanjapaleta[i]}}</span>\n                            </p>\n                        </div>\n                        <div class=\"cm-4 ml-4 mr-4\" style=\"border: 2px solid black ; padding:2%\">\n                            <h3>\n                                Stanje dzakova:\n                            </h3>\n                            <p *ngFor=\"let dz of nazividzakova; let i = index\">\n                                Dzak {{dz}} : <span style=\"color:green\">{{stanjadzakova[i]}}</span>\n            \n                            </p>\n                        </div>\n                        <div class=\"cm-4 ml-4\" style=\"border: 2px solid black; padding:2%\">\n                            <h3>Stanje streča:</h3>\n                            <p>\n                              {{s}} : <span style=\"color: green\">{{ss}}</span>\n                            </p>\n                        </div>\n                </div>\n                \n            </div>\n    </div>    \n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Izmena stanja</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n\n            <label>Magacin *</label>\n            <select (change)=\"pakovanjeChange($event.target.value)\"  [formControl]=\"magacinizmena_form\" class=\"form-control\"> \n            <option [innerHTML]=\"magacin.item_text\"  [id]=\"magacin.item_id\" [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\"> </option>\n            </select>\n\n            <label>Izmena stanja *</label>\n            <select class=\"form-control\" [formControl] = \"izbor\" (change)=\"izbor($event.target.value)\">\n              <option value=\"\"></option>\n              <option value=\"1\">Creva</option>\n              <option value=\"2\">Palete</option>\n              <option value=\"3\">Dzakova</option>\n              <option value=\"4\">Streča</option>\n            </select>\n            \n            <label *ngIf=\"izmenacreva\">Vrsta djubriva *</label>\n            <select *ngIf=\"izmenacreva\" (change)=\"pakovanjeChange($event.target.value)\" [formControl]=\"djubrivo_form\" class=\"form-control\">\n                <option [value]=\"djubrivo.id\"  *ngFor=\"let djubrivo of roba\">\n                    {{ djubrivo.naziv }} \n                </option>\n            </select>\n\n            <label *ngIf=\"izmenacreva\">Tip creva</label>\n            <select *ngIf=\"izmenacreva\" [formControl] = \"crevoform\" class=\"form-control\">\n              <option value=\"2\">120 mikrona</option>\n              <option value=\"1\">100 mikrona</option>\n            </select>\n\n           \n            <label *ngIf=\"izmenapalete\">Tip palete *</label>\n            <select class=\"form-control\" *ngIf=\"izmenapalete\" [formControl]=\"paletaform\">\n              <option  value=\"0\">\n                                \n              </option>\n              <option value=\"1\">\n                  120*100 \n              </option>\n              <option value=\"2\">\n                  115*95 \n              </option>  \n            </select>\n\n            <label *ngIf=\"izmenadzaka\">Vrsta dzaka *</label>\n            <select *ngIf=\"izmenadzaka\" (change)=\"dzakChange($event.target.value)\" [formControl]=\"dzak_form\" class=\"form-control\">\n                <option  value=\"0\">\n                    \n                </option>\n                <option value=\"4\">\n                    50/1\n                </option>\n                <option value=\"5\">\n                    500/1\n                </option>  \n                <option value=\"6\">\n                     600/1\n                </option>  \n                <option value=\"7\">\n                    1000/1\n                </option>  \n            </select>\n\n\n           \n            <label>Nova količina *</label>\n            <input type=\"number\" [formControl]=\"novakolicina\" class=\"form-control\">\n          \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Odustani</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"azuriranje()\">Sačuvaj</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/lagertabela/lagertabela.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/lagertabela/lagertabela.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"report\" class=\"mt-4\">\n  <h4>{{mag}}</h4>\n    <table class=\"table table-bordered\" [id]=\"mag\">\n      <thead>\n        <tr>\n          <th>Pakovanje</th>\n          <th *ngFor=\"let l of lagers\"> \n            {{l.robaNaziv}}\n          </th>\n        </tr>\n      </thead> \n        \n        <tbody>\n            <tr *ngFor=\"let a of vrednosti25; let i = index\">\n                <th>\n                  {{a.package}}\n                </th>\n                <td >\n                  {{a.value}}\n                </td>\n                <td>\n                  {{pedeset[i].value}}\n                </td>\n                <td>\n                  {{map[i].value}}\n                </td>\n                <td>\n                  {{kcl[i].value}}\n                </td>\n                <td>\n                  {{urea[i].value}}\n                </td>\n                <td>\n                    {{gran[i].value}}\n                </td>\n                <td>\n                    {{san[i].value}}\n                </td>\n                <td>\n                    {{kan[i].value}}\n                </td>\n                <td>\n                    {{amon[i].value}}\n                </td>\n                <td>\n                  {{np[i].value}}\n                </td>\n                <td>\n                  {{ureapril[i].value}}\n                </td>\n                <td>\n                  {{dap[i].value}}\n                </td>\n                \n            </tr>\n\n<tr>\n<td>\n<b>Suma</b> \n</td>\n<td *ngFor=\"let x of toShow; let j = index\">\n<b>{{ x }}</b>\n</td>\n</tr>\n\n       \n        </tbody>\n      </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"margin-top:25vh\">\r\n    <form class=\"form-signin\">\r\n            <img class=\"mb-4\" src=\"../../../assets/logo.png\" alt=\"\">\r\n            <h1 class=\"h3 mb-3 font-weight-normal\">Prijavite se</h1>\r\n            <label for=\"inputEmail\" class=\"sr-only\">Korisničko ime</label>\r\n            <input [formControl]=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Korisničko ime\" required autofocus>\r\n            <label for=\"inputPassword\" class=\"sr-only\">Lozinka</label>\r\n            <input [formControl]=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Lozinka\" required>\r\n            <p style=\"color: red\" *ngIf=\"wrong\">Pogrešna kombinacija korisničkog imena i lozinke. Molim Vas pokušajte ponovo.</p>\r\n            <button (click)=\"loginBtn()\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Prijava</button>\r\n            <p class=\"mt-5 mb-3 text-muted\">&copy; 2019</p>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"border-bottom:2px solid green\">\n        <button  class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n          <a   style=\"cursor: pointer\" class=\"navbar-brand\" (click)=\"navigateHome()\"><img src=\"../../../assets/logo.png\"></a>\n          <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigateDjubrivo()\" >Novo Djubrivo</a>\n            </li>\n\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" style=\"cursor: pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Unos\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"navigateHome()\">Promene stanja</a>\n                  <a class=\"dropdown-item\" style=\"cursor: pointer\"  (click)=\"navigateNewRepro()\">Repro materijala</a>\n                  <a class=\"dropdown-item\" style=\"cursor: pointer\"  (click)=\"navigatePakovanje()\">Pakovanja</a>\n                  </div>\n              </li>\n\n<!--\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigateHome()\" >Novi Unos</a>\n            </li>-->\n   \n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" style=\"cursor: pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Lager\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"navigateLager()\">Lager djubriva</a>\n                  <a class=\"dropdown-item\" style=\"cursor: pointer\"  (click)=\"navigateLagerR()\">Lager repro materijala</a>\n                  </div>\n              </li>\n              <li class=\"nav-item\">\n                  <li class=\"nav-item dropdown\">\n                      <a class=\"nav-link dropdown-toggle\" style=\"cursor: pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                          Izveštaji\n                        </a>\n                      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"navigateReport()\">Izveštaj</a>\n                        <a class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"navigateReportRepro()\">Izveštaj repromaterijala</a>\n                        <a class=\"dropdown-item\" style=\"cursor: pointer\"  (click)=\"navigateDetalj()\">Izveštaj na dan</a>\n                        </div>\n                    </li>\n      \n                \n  <!--         <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigateLager()\">Lager</a>\n            </li>-->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigateParse()\">Uvezi</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigatePassword()\">Nalog</a>\n            </li>\n            <!--\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigateNewRepro()\">Unos RP</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigatePakovanje()\">Pakovanje</a>\n            </li>-->\n           <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"navigateLagerR()\">Lager RP</a>\n            </li>-->\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <button (click)=\"logout()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Logout</button>\n          </form>\n        </div>\n      </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/newrepro/newrepro.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/newrepro/newrepro.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Unos repro-materijala</h2>\n        <hr>\n    </div>\n\n    <form>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label>Magacin glavni</label>\n                <select  (change)=\"magacinChange($event.target.value)\" [formControl]=\"magacin_form\" class=\"form-control\">\n                    <option  value=\"0\">\n                        \n                    </option>\n                    <option [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">\n                        {{ magacin.item_text }}\n                    </option>\n                 \n                </select>\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label>Magacin prenos</label>\n                <select (change)=\"magacinPrenosChange($event.target.value)\" [formControl]=\"magacin_prenos_form\" class=\"form-control\">\n                    <option selected value=\"0\">\n                        Nema prenosa\n                    </option>\n                    <option [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">\n                        {{ magacin.item_text }}\n                    </option>\n                 \n                </select>\n              </div>\n              <div *ngIf=\"unetMagacinPrenos || unetMagacin\" class=\"form-group col-md-4\">\n                  <label for=\"\">Tip prenosa</label>\n                  <select  [formControl]=\"operacija_form\" class=\"form-control\">\n                    <option selected *ngIf=\"!unetMagacinPrenos\" value=\"plus\">\n                        Ulaz\n                    </option>\n                    <option selected *ngIf=\"!unetMagacinPrenos\" value=\"minus\">\n                       Izlaz\n                    </option>\n                    <option selected  *ngIf=\"unetMagacinPrenos\" value=\"prenos\">\n                        Prenos\n                     </option>\n                 \n                </select>\n              </div>\n              <div *ngIf=\"unetMagacin\" class=\"form-group col-md-4\">\n                    <label>Vrsta materijala</label>\n                    <select (change)=\"vrstaChange($event.target.value)\" [formControl]=\"vrsta_materijala_form\" class=\"form-control\">\n                        <option value=\"0\">\n                            \n                        </option>\n                        <option value=\"1\">\n                            PALETA\n                        </option>\n\n                        <option value=\"2\">\n                            PE CREVO\n                        </option>\n\n                        <option value=\"3\">\n                            STEČ FOLIJA\n                        </option>\n\n                        <option value=\"4\">\n                             DZAK\n                        </option>\n        \n                    </select>\n                  </div>\n\n                  <div *ngIf=\"showPaleta\" class=\"form-group col-md-4\">\n                        <label>Vrsta palete</label>\n                        <select (change)=\"paletaChange($event.target.value)\" [formControl]=\"paletica_form\" class=\"form-control\">\n                            <option  value=\"0\">\n                                \n                            </option>\n                            <option value=\"1\">\n                                120*100 \n                            </option>\n                            <option value=\"2\">\n                                115*95 \n                            </option>  \n                          \n                        </select>\n                    </div>\n\n\n                <div *ngIf=\"showPeCrevo\" class=\"form-group col-md-4\">\n                        <label>Vrsta pe creva</label>\n                        <select (change)=\"crevoChange($event.target.value)\" [formControl]=\"paletica_form\" class=\"form-control\">\n                            <option selected value=\"0\">\n                                \n                            </option>\n                            <option value=\"1\">\n                                100 mikrona\n                            </option>\n                            <option value=\"2\">\n                                120 mikrona\n                            </option>  \n                            \n                        </select>\n                    </div>\n \n                    <div *ngIf=\"dzak\" class=\"form-group col-md-4\">\n                            <label>Vrsta dzaka</label>\n                            <select (change)=\"dzakChange($event.target.value)\" [formControl]=\"paletica_form\" class=\"form-control\">\n                                <option  value=\"0\">\n                                    \n                                </option>\n                                <option value=\"4\">\n                                    50/1\n                                </option>\n                                <option value=\"5\">\n                                    500/1\n                                </option>  \n                                <option value=\"6\">\n                                     600/1\n                                </option>  \n                                <option value=\"7\">\n                                    1000/1\n                                </option>  \n                            </select>\n                        </div>\n                         \n\n\n            </div>\n            <div class=\"form-row\">\n\n                    <div *ngIf=\"showKolicinaPaleta && showDjubrivo\" class=\"form-group col-md-4\">\n                            <label>Vrsta djubriva</label>\n                            <select (change)=\"onChange($event.target.value)\" [formControl]=\"djubrivo_form\" class=\"form-control\">\n                                <option  value=\"0\">\n                                    \n                                </option>\n                                <option [value]=\"djubrivo.id\"  *ngFor=\"let djubrivo of roba\">\n                                    {{ djubrivo.naziv }} \n                                </option>  \n                              \n                            </select>\n                        </div>\n\n                <div *ngIf=\"showKolicina || showKolicinaPaleta\" class=\"form-group col-md-4\">\n                    <label>Količina</label>\n                    <input type=\"number\" class=\"form-control\" [formControl]=\"kolicina\">\n                </div>\n                <!--\n                <div  class=\"form-group col-md-4\">\n                    <label>Vrsta materijala</label>\n                    <select [formControl]=\"materijal_form\" class=\"form-control\">\n                        \n                        <option *ngIf=\"!odabranaRoba\" value=\"1\">\n                            PALETA 120*100\n                        </option>\n                        <option *ngIf=\"!odabranaRoba\" value=\"2\">\n                            PALETA 120*100\n                        </option>\n                        <option *ngIf=\"!odabranaRoba\" value=\"3\">\n                            PALETA 115*95\n                        </option>\n                        <option *ngIf=\"!odabranaRoba\" value=\"4\">\n                            STREČ FOLIJA\n                        </option>\n                        <option *ngIf=\"!odabranaRoba\" value=\"5\">\n                            DZAK 50/1\n                        </option>\n                        <option *ngIf=\"!odabranaRoba\" value=\"6\">\n                            DZAK 500/1\n                        </option>  \n                        <option *ngIf=\"!odabranaRoba\" value=\"7\">\n                            DZAK 600/1\n                        </option>\n                        <option *ngIf=\"!odabranaRoba\" value=\"8\">\n                            DZAK 1000/1\n                        </option>\n                        \n                        \n                        <option *ngIf=\"odabranaRoba\" value=\"1\">\n                            PE CREVO 100 mikrona\n                        </option>\n                        <option *ngIf=\"odabranaRoba\" value=\"2\">\n                            PE CREVO 120 mikrona\n                        </option>\n                        \n                    </select>\n                </div>\n            </div>\n            -->\n            </div>\n            <div class=\"form-group col-md-4\">\n                    <button type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"unesiRepro()\"> Unos </button>\n             </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/pakovanje/pakovanje.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/pakovanje/pakovanje.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container mt-4\">\n\n    <div class=\"header\">\n        <h2 class=\"mb-4\">Pakovanje</h2>\n        <hr>\n    </div>\n\n    <form>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label>Magacin</label>\n                <select (change)=\"magacinChange($event.target.value)\" [formControl]=\"magacin_form\" class=\"form-control\">\n                    <option selected value=\"0\">\n\n                    </option>\n                    <option [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">\n                        {{ magacin.item_text }}\n                    </option>\n                 \n                </select>\n              </div>\n\n              <div *ngIf=\"showdjubrivo\" class=\"form-group col-md-4\">\n                <label>Vrsta djubriva</label>\n                <select (change)=\"onChangeDjubrivo($event.target.value)\" [formControl]=\"djubrivo_form\" class=\"form-control\">\n                    <option selected value=\"0\" selected>\n\n                    </option>\n                    <option [value]=\"djubrivo.id\"  *ngFor=\"let djubrivo of roba\">\n                        {{ djubrivo.naziv }} \n                    </option>  \n                  \n                </select>\n            </div>\n\n\n            <div *ngIf=\"showlot\" class=\"form-group col-md-4\">\n                    <label>LOT</label>\n                    <select (change)=\"changedLot($event.target.value)\" [formControl]=\"lot_form\" class=\"form-control\">\n                        <option selected value=\"0\">\n\n                        </option>\n                        <option [value]=\"lot.id\"  *ngFor=\"let lot of lots\">\n                          {{ lot.naziv }}\n                       </option>\n\n                    </select>\n            </div>\n\n            <div *ngIf=\"showKolicina\" class=\"form-group col-md-4\">\n                    <label>Količina</label>\n                    <input type=\"number\" class=\"form-control\" [formControl]=\"kolicina\">\n            </div>\n\n            <div *ngIf=\"showKolicina\" class=\"form-group col-md-4\">\n                    <label for=\"\">Izvor</label>\n                    <select (change)=\"izvorChange($event.target.value)\" [formControl]=\"izvor_form\" class=\"form-control\">\n                        <option  selected value=\"0\">\n\n                        </option>\n                       \n                        <option  value=\"6\">\n                            rinfuz\n                        </option>\n                        <option value=\"8\">\n                            1000/1 neegalizovano\n                        </option>\n\n                    </select>\n                </div>\n\n\n\n                <div *ngIf=\"showPakovanje\" class=\"form-group col-md-4\">\n                        <label for=\"\">Pakovanje</label>\n                        <select (change)=\"pakovanjeChange($event.target.value)\" name=\"\" [formControl]=\"pakovanje_form\" id=\"\" class=\"form-control\">\n                            <option selected value=\"0\">\n    \n                            </option>\n                            <option value=\"1\">\n                                25/1\n                            </option>\n                            <option value=\"2\">\n                                    50/1\n                            </option>\n                            <option value=\"3\">\n                                    500/1\n                            </option>\n                            <option value=\"4\">\n                                    600/1\n                            </option>\n                            <option value=\"5\">\n                                    1000/1\n                            </option>\n                           \n    \n                        </select>\n                    </div>\n    \n\n\n\n\n\n\n                <div *ngIf=\"showcrevo\" class=\"form-group col-md-4\">\n                    <label for=\"\">Tip pe creva</label>\n                    <select name=\"\" id=\"\" class=\"form-control\" [formControl]=\"crevo_form\">\n                        <option selected value=\"0\">\n\n                        </option>\n                        <option value=\"1\">\n                            100 mikrona\n                        </option>\n                        <option value=\"2\">\n                            120 mikrona\n                        </option>\n                    </select>\n                </div>\n                \n                \n                \n              \n\n        </div>\n        <div class=\"form-group col-md-4\">\n            <input type=\"date\" [formControl]=\"datum\" class=\"form-control\">    \n        </div>\n        <div *ngIf=\"showbtn\" class=\"form-group col-md-4\">\n            <button type=\"submit\" class=\"btn btn-primary mt-2\" (click)=\"zapakuj()\"> Pakovanje </button>\n        </div> \n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/parse/parse.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/parse/parse.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container mt-4\">\r\n\r\n    <div class=\"header\">\r\n        <h2 class=\"mb-4\">Lager lista</h2>\r\n        <hr>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"file\">Izaberite fajl</label><br>\r\n        <input type=\"file\"\r\n               id=\"file\"\r\n               (change)=\"handleFileInput($event.target.files)\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button (click)=\"uploadFileToActivity()\" class=\"btn btn-primary\">Uvezi</button>\r\n    </div>\r\n\r\n    <p *ngIf=\"parsed\">\r\n      Ukoliko ne postoji dovoljna kolicina djubriva na stanju, nije moguce raditi otpremu.\r\n    </p>\r\n\r\n\r\n    <table *ngIf=\"parsed\" class=\"table table-bordered\" id=\"tableid\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\"  *ngFor=\"let c of columns\">{{c}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let obj of obj4table;let i = index\">\r\n            <th scope=\"row\">{{ i+1 }}</th>\r\n            <td>{{obj.magacin}}</td>\r\n            <td>{{obj.nazivRobe}}</td>\r\n            <td>{{obj.pakovanje}}</td>\r\n            <td>{{obj.smer}}</td>\r\n            <td>{{obj.kolicina}}</td>\r\n            <td>{{obj.lot}}</td>\r\n            <td>\r\n               \r\n                {{obj.napomena}}\r\n                \r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      \r\n      </table>\r\n    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/report/report.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/report/report.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container mt-4\">\r\n\r\n    <div class=\"header\">\r\n        <h2 class=\"mb-4\">Izveštaj</h2>\r\n        <hr>\r\n    </div>\r\n    <div class=\"form-group col-md-4\">\r\n        <label>Magacin</label>\r\n        <select [formControl]=\"magacin_form\" class=\"form-control\">\r\n            <option [innerHTML]=\"magacin.item_text\"  [id]=\"magacin.item_id\" [value]=\"magacin.item_id\"  *ngFor=\"let magacin of magacini\">  \r\n            </option>\r\n         <option></option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n            <label>Vrsta djubriva</label>\r\n            <select [formControl]=\"djubrivo_form\" class=\"form-control\">\r\n                <option  [innerHTML]=\"djubrivo.naziv\" [id]=\"djubrivo.id\" [value]=\"djubrivo.id\"  *ngFor=\"let djubrivo of roba\">\r\n                </option>  \r\n              <option></option>\r\n            </select>\r\n        </div>\r\n      \r\n        <div class=\"form-group col-md-4\">\r\n              <label>LOT</label>\r\n              <select [formControl]=\"lot_form\" class=\"form-control\">\r\n                  <option  [innerHTML]=\"lot.naziv\" [id]=\"lot.id\" [value]=\"lot.id\"  *ngFor=\"let lot of lots\">    \r\n                 </option>\r\n                 <option></option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"\">Pakovanje</label>\r\n            <select (change)=\"pakovanjeChange($event.target.value)\" name=\"\" [formControl]=\"pakovanje_form\" id=\"\" class=\"form-control\">\r\n                <option selected value=\"0\">\r\n\r\n                </option>\r\n                <option value=\"1\">\r\n                    25/1\r\n                </option>\r\n                <option value=\"2\">\r\n                        50/1\r\n                </option>\r\n                <option value=\"3\">\r\n                        500/1\r\n                </option>\r\n                <option value=\"4\">\r\n                        600/1\r\n                </option>\r\n                <option value=\"5\">\r\n                        1000/1\r\n                </option>\r\n                <option value=\"6\">\r\n                  rinfuz\r\n                </option>\r\n                <option value=\"7\">\r\n                  vanstandardno\r\n                </option>\r\n                <option value=\"8\">\r\n                  neegal\r\n                </option>\r\n               \r\n\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Smer</label>\r\n          <select [formControl]=\"smer_form\" class=\"form-control\">\r\n              <!--\r\n                  <option [value]=\"smer.id\"  *ngFor=\"let smer of smerovi\">\r\n                        smer.name\r\n                  </option>\r\n              -->\r\n            <option value=\"ulaz\">Ulaz</option>\r\n            <option value=\"izlaz\">Izlaz</option>\r\n            <option value=\"pakovanje\">Pakovanje</option>\r\n            <!--<option value=\"pakovanje\">Pakovanje</option>-->\r\n          </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Podsmer</label>\r\n        <select [formControl]=\"podsmer_form\" class=\"form-control\">\r\n            <!--\r\n                <option [value]=\"smer.id\"  *ngFor=\"let smer of smerovi\">\r\n                      smer.name\r\n                </option>\r\n            -->\r\n          <option value=\"\"></option>\r\n          <option value=\"dobavljac\">Dobavljac</option>\r\n          <option value=\"interno\">Interno</option>\r\n          \r\n          <!--<option value=\"pakovanje\">Pakovanje</option>-->\r\n        </select>\r\n    </div>\r\n\r\n\r\n\r\n        \r\n          <div class=\"form-group col-md-4\">\r\n            <p style=\"color:red\" *ngIf=\"msg\">Molim Vas odabarite magacin i vrstu robe(djubrivo).</p>\r\n            <p style=\"color:red\" *ngIf=\"nema\">Nema podataka za odabran magacin i vrstu robe(djubrivo).</p>\r\n\r\n          </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <button (click)=\"showTa()\" class=\"btn btn-primary\"><i class=\"far fa-file-pdf mr-2\"></i> Izveštaj</button>\r\n              <button *ngIf=\"showTable\" class=\"btn btn-primary ml-2\" (click)=\"downloadAsPdf()\"><i class=\"fas fa-download mr-2\"></i> Preuzmi</button>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              \r\n            </div>\r\n\r\n            <div *ngIf=\"showTable\" class=\"form-group col-md-4\">\r\n              <label>Datum od </label>\r\n              <input class=\"ml-2\" [formControl]=\"datumOd\" type=\"date\">\r\n            </div>\r\n            \r\n            <div *ngIf=\"showTable\" class=\"form-group col-md-4\">\r\n              <label>Datum do </label>\r\n              <input class=\"ml-2\" [formControl]=\"datumDo\"  type=\"date\">\r\n            </div>\r\n        <div class=\"form-group col-md-4\">\r\n         \r\n            <button *ngIf=\"showTable\" (click)=\"sortByDate()\" class=\"btn btn-primary mr-2\"><span *ngIf=\"!sortex\"><i class=\"fas fa-arrow-down\"></i></span> <span *ngIf=\"sortex\"><i class=\"fas fa-arrow-up\"></i></span> Sortiraj po datumu</button>\r\n          <button *ngIf=\"showTable\" (click)=\"filterTable()\" class=\"btn btn-primary\"><i class=\"fas fa-filter\"></i> Filtriraj</button>\r\n         \r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n<div class=\"showtable\" *ngIf=\"showTable\">\r\n<div class=\"container\" id=\"topdf\">\r\n    <div id=\"report\" class=\" mb-4\">\r\n        <table class=\"table table-bordered\" id=\"tableid\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\"  *ngFor=\"let c of columns\">{{c}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let obj of obj4table;let i = index\">\r\n                <th scope=\"row\" *ngIf=\"i+1 != obj4table.length\">{{ i+1 }}</th>\r\n                <th scoper=\"row\" *ngIf=\"i+1 == obj4table.length\"><b>Konačno</b></th>\r\n                <td>{{obj.datum}}</td>\r\n                <td>{{obj.pakovanjeNaziv}}</td>\r\n                <td>{{obj.smer}}</td>\r\n                <td [style.font-weight]=\"i+1 == obj4table.length ? 'bold' : 'normal'\">{{obj.kolicina}}</td>\r\n                <td [style.background]=\"obj.needed ? 'orange' : 'white'\"\r\n                    [style.background]=\"obj.urgent ? 'red' : 'white'\"\r\n                    [style.color]=\"obj.urgent ? 'grey' : 'black'\"\r\n                    [style.color]=\"obj.needed ? 'grey' : 'black'\">{{obj.novoStanje}}</td>\r\n                <td>{{obj.lotNaziv}}</td>\r\n                <td>\r\n                    <div *ngIf=\"!obj.hasNapomena\" class=\"form-group\">\r\n                      <input  [formControl]=\"napomena_form\" type=\"text\" name=\"\" id=\"\">\r\n                      <button  class=\"btn btn-primary ml-2\" (click)=\"addNapomena(obj)\">/</button>\r\n                    </div>\r\n                    <div *ngIf=\"obj.hasNapomena\" class=\"form-group\">\r\n                        {{obj.napomena}}\r\n                    </div>\r\n                    \r\n                    \r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          \r\n          </table>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'promist-logistics-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _view_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/homepage/homepage.component */ "./src/app/view/homepage/homepage.component.ts");
/* harmony import */ var _view_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/login/login.component */ "./src/app/view/login/login.component.ts");
/* harmony import */ var _view_report_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/report/report.component */ "./src/app/view/report/report.component.ts");
/* harmony import */ var _view_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/navbar/navbar.component */ "./src/app/view/navbar/navbar.component.ts");
/* harmony import */ var _view_lagerlista_lagerlista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/lagerlista/lagerlista.component */ "./src/app/view/lagerlista/lagerlista.component.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _view_djubrivo_djubrivo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view/djubrivo/djubrivo.component */ "./src/app/view/djubrivo/djubrivo.component.ts");
/* harmony import */ var _view_parse_parse_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view/parse/parse.component */ "./src/app/view/parse/parse.component.ts");
/* harmony import */ var _view_newrepro_newrepro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view/newrepro/newrepro.component */ "./src/app/view/newrepro/newrepro.component.ts");
/* harmony import */ var _view_pakovanje_pakovanje_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view/pakovanje/pakovanje.component */ "./src/app/view/pakovanje/pakovanje.component.ts");
/* harmony import */ var _view_lagerrepro_lagerrepro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view/lagerrepro/lagerrepro.component */ "./src/app/view/lagerrepro/lagerrepro.component.ts");
/* harmony import */ var _view_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view/changepassword/changepassword.component */ "./src/app/view/changepassword/changepassword.component.ts");
/* harmony import */ var _view_construction_construction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view/construction/construction.component */ "./src/app/view/construction/construction.component.ts");
/* harmony import */ var _view_izvestajdetalj_izvestajdetalj_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view/izvestajdetalj/izvestajdetalj.component */ "./src/app/view/izvestajdetalj/izvestajdetalj.component.ts");
/* harmony import */ var _view_lagertabela_lagertabela_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./view/lagertabela/lagertabela.component */ "./src/app/view/lagertabela/lagertabela.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _view_izvestajrepro_izvestajrepro_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./view/izvestajrepro/izvestajrepro.component */ "./src/app/view/izvestajrepro/izvestajrepro.component.ts");






























var appRoutes = [
    { path: 'početna', component: _view_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"] },
    { path: 'prijava', component: _view_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'lagerrp', component: _view_lagerrepro_lagerrepro_component__WEBPACK_IMPORTED_MODULE_22__["LagerreproComponent"] },
    { path: 'izveštaj', component: _view_report_report_component__WEBPACK_IMPORTED_MODULE_14__["ReportComponent"] },
    { path: 'izveštaj/repro', component: _view_izvestajrepro_izvestajrepro_component__WEBPACK_IMPORTED_MODULE_29__["IzvestajreproComponent"] },
    { path: 'lozinka', component: _view_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_23__["ChangepasswordComponent"] },
    { path: 'djubrivo', component: _view_djubrivo_djubrivo_component__WEBPACK_IMPORTED_MODULE_18__["DjubrivoComponent"] },
    { path: 'lager', component: _view_lagerlista_lagerlista_component__WEBPACK_IMPORTED_MODULE_16__["LagerlistaComponent"] },
    { path: 'pakovanje', component: _view_pakovanje_pakovanje_component__WEBPACK_IMPORTED_MODULE_21__["PakovanjeComponent"] },
    { path: 'repro', component: _view_newrepro_newrepro_component__WEBPACK_IMPORTED_MODULE_20__["NewreproComponent"] },
    { path: 'parse', component: _view_parse_parse_component__WEBPACK_IMPORTED_MODULE_19__["ParseComponent"] },
    { path: 'detalj', component: _view_izvestajdetalj_izvestajdetalj_component__WEBPACK_IMPORTED_MODULE_25__["IzvestajdetaljComponent"] },
    { path: '**', component: _view_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _view_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                _view_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _view_report_report_component__WEBPACK_IMPORTED_MODULE_14__["ReportComponent"],
                _view_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _view_lagerlista_lagerlista_component__WEBPACK_IMPORTED_MODULE_16__["LagerlistaComponent"],
                _view_djubrivo_djubrivo_component__WEBPACK_IMPORTED_MODULE_18__["DjubrivoComponent"],
                _view_parse_parse_component__WEBPACK_IMPORTED_MODULE_19__["ParseComponent"],
                _view_newrepro_newrepro_component__WEBPACK_IMPORTED_MODULE_20__["NewreproComponent"],
                _view_pakovanje_pakovanje_component__WEBPACK_IMPORTED_MODULE_21__["PakovanjeComponent"],
                _view_lagerrepro_lagerrepro_component__WEBPACK_IMPORTED_MODULE_22__["LagerreproComponent"],
                _view_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_23__["ChangepasswordComponent"],
                _view_construction_construction_component__WEBPACK_IMPORTED_MODULE_24__["ConstructionComponent"],
                _view_izvestajdetalj_izvestajdetalj_component__WEBPACK_IMPORTED_MODULE_25__["IzvestajdetaljComponent"],
                _view_lagertabela_lagertabela_component__WEBPACK_IMPORTED_MODULE_26__["LagertabelaComponent"],
                _view_izvestajrepro_izvestajrepro_component__WEBPACK_IMPORTED_MODULE_29__["IzvestajreproComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_17__["DataTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__["AngularMultiSelectModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
                    multi: true,
                },
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage/token-storage.service */ "./src/app/auth/token-storage/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token, router) {
        this.token = token;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        else {
        }
        return next.handle(authReq);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/forms/login-info.ts":
/*!******************************************!*\
  !*** ./src/app/auth/forms/login-info.ts ***!
  \******************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(email, password) {
        this.email = email;
        this.password = password;
    }
    AuthLoginInfo.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/service/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/service/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
//const authUrl = "http://localhost:8080/api/auth/"
var authUrl = "https://promist-logistics-app.herokuapp.com/api/auth/";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.getCurrentUser = authUrl + 'getCurrentUser';
        this.changeURL = authUrl + 'changePassword';
        this.loginUrl = authUrl + 'signin';
        this.signupUrl = authUrl + 'signup';
        this.testLogin = authUrl + 'testSI';
        this.emailCheck = authUrl + 'checkEmail/';
        this.getLoggedUrl = authUrl + 'getLogged';
        this.validEmailUrl = authUrl + 'validEmail/';
        this.confirmUserUrl = authUrl + 'confirm/';
        this.logoutUrl = authUrl + 'signout/';
        this.getAgent = authUrl + 'getOneAgent/';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info);
    };
    AuthService.prototype.getLogged = function () {
        return this.http.get(this.getLoggedUrl);
    };
    AuthService.prototype.logout = function () {
        return this.http.get(this.logoutUrl);
    };
    AuthService.prototype.promeniLozinku = function (obj) {
        return this.http.post(this.changeURL, obj);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/token-storage/token-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/token-storage/token-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/models/Promena.ts":
/*!***********************************!*\
  !*** ./src/app/models/Promena.ts ***!
  \***********************************/
/*! exports provided: Promena */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promena", function() { return Promena; });
var Promena = /** @class */ (function () {
    function Promena() {
    }
    return Promena;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/magacin.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/magacin.service.ts ***!
  \*********************************************/
/*! exports provided: MagacinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagacinService", function() { return MagacinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




var MagacinService = /** @class */ (function () {
    function MagacinService(http) {
        this.http = http;
    }
    MagacinService.prototype.getAll = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/magacin/all');
    };
    MagacinService.prototype.getLagerSviDetaljno = function (magacini) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/lagersvimagacini', magacini);
    };
    MagacinService.prototype.getLagerRepro = function (a) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/lagerMaterijala/' + a);
    };
    MagacinService.prototype.getAllRoba = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/roba/all');
    };
    MagacinService.prototype.getAllLots = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/lot/all');
    };
    MagacinService.prototype.promena = function (ppp) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/unesiPromenu', ppp);
    };
    MagacinService.prototype.createNew = function (sluzba) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/magacin/new', sluzba);
    };
    MagacinService.prototype.getAllPromena = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/promeneMeril', obj);
    };
    MagacinService.prototype.getAllPromenaRepro = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/promeneRepro', obj);
    };
    MagacinService.prototype.getLager = function (id) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/lager/' + id);
    };
    MagacinService.prototype.getPoDatumu = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/promeneMeril', obj);
    };
    MagacinService.prototype.addDjubrivo = function (naziv) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/dodajDjubrivo', naziv);
    };
    MagacinService.prototype.addNapomena = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/dodajNapomenu', obj);
    };
    MagacinService.prototype.addNapomenaRepro = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/dodajNapomenuRepro', obj);
    };
    MagacinService.prototype.getAllMaterijali = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/allMaterijali');
    };
    MagacinService.prototype.postFile = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http
            .post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/parseExcel', formData);
    };
    MagacinService.prototype.izvestajDetaljno = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/izvestajDetaljno', obj);
    };
    MagacinService.prototype.unesiRepro = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/ulazRepromaterijala', obj);
    };
    MagacinService.prototype.getAllLagers = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/lager');
    };
    MagacinService.prototype.pakuj = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/pakovanje', obj);
    };
    MagacinService.prototype.getstanje = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/dobavistanje', obj);
    };
    MagacinService.prototype.azurirajstanje = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/azurirajstanje', obj);
    };
    MagacinService.prototype.azuriranjecrevo = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/azuriranjecreva', obj);
    };
    MagacinService.prototype.azuriranjepalete = function (obj) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/marlep/azuriranjepalete', obj);
    };
    MagacinService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MagacinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MagacinService);
    return MagacinService;
}());



/***/ }),

/***/ "./src/app/view/changepassword/changepassword.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/changepassword/changepassword.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/changepassword/changepassword.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/changepassword/changepassword.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "./src/app/auth/service/auth.service.ts");





var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(router, auths) {
        this.router = router;
        this.auths = auths;
        this.prvi_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.drugi_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.msg = false;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
    };
    ChangepasswordComponent.prototype.addButton = function () {
        var _this = this;
        this.msg = false;
        if (this.prvi_pass.value != this.drugi_pass.value) {
            this.msg = true;
            this.prvi_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
            this.drugi_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
            return;
        }
        this.auths.promeniLozinku({
            oldPassword: "testtest123",
            newPassword: this.prvi_pass.value,
            newPasswordAgain: this.drugi_pass.value
        }).subscribe(function (data) {
            alert("Uspešno promenuta lozinka");
            _this.prvi_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
            _this.drugi_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        });
    };
    ChangepasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/view/changepassword/changepassword.component.css")]
        })
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/view/construction/construction.component.css":
/*!**************************************************************!*\
  !*** ./src/app/view/construction/construction.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------------------------------------\r\nProject:  ComingSoon\r\nVersion:  \r\nLast change:  \r\nAssigned to:  Bach Le\r\nPrimary use:  \r\n-------------------------------------------------------------------*/\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ RS PLUGIN ]*/\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.container {max-width: 1200px;}\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Form ]*/\r\n\r\n\r\n\r\n.contact100-form {\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n/*------------------------------------------------------------------\r\n  [ Input ]*/\r\n\r\n\r\n\r\n.wrap-input100 {\r\n    width: 500px;\r\n    max-width: 100%;\r\n    position: relative;\r\n    background-color: transparent;\r\n    height: 80px;\r\n  }\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.input100 {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0 90px 0 35px;\r\n    background-color: #fff;\r\n  \r\n    box-shadow: 0 10px 15px 0px rgba(0,0,0,0.1);\r\n    -moz-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.1);\r\n    -webkit-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.1);\r\n    -o-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.1);\r\n    -ms-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.1);\r\n  }\r\n\r\n\r\n\r\n.input100:focus {\r\n    box-shadow: 0 10px 15px 0px rgba(0,0,0,0.2);\r\n    -moz-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.2);\r\n    -webkit-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.2);\r\n    -o-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.2);\r\n    -ms-box-shadow: 0 10px 15px 0px rgba(0,0,0,0.2);\r\n  }\r\n\r\n\r\n\r\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n\r\n\r\n.validate-input {\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n.alert-validate::before {\r\n    content: attr(data-validate);\r\n    position: absolute;\r\n    max-width: 70%;\r\n    background-color: #fff;\r\n    border: 1px solid #c80000;\r\n    border-radius: 0px;\r\n    padding: 4px 25px 4px 10px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 82px;\r\n    pointer-events: none;\r\n  \r\n    font-family: Poppins-Medium;\r\n    color: #c80000;\r\n    font-size: 14px;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: opacity 0.4s;\r\n  }\r\n\r\n\r\n\r\n.alert-validate::after {\r\n    content: \"\\f071\";\r\n    font-family: FontAwesome;\r\n    display: block;\r\n    position: absolute;\r\n    color: #c80000;\r\n    font-size: 14px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 88px;\r\n  }\r\n\r\n\r\n\r\n.alert-validate:hover:before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n    .alert-validate::before {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Simple slide100 ]*/\r\n\r\n\r\n\r\n.simpleslide100-parent {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n\r\n.simpleslide100 {\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n\r\n\r\n.simpleslide100-item {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n\r\n\r\n/*==================================================================\r\n      TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT\r\n  ==================================================================*/\r\n\r\n\r\n\r\n/*==================================================================\r\n  [ Color ]*/\r\n\r\n\r\n\r\n.cl0 {color: #fff;}\r\n\r\n\r\n\r\n.cl1 {color: #333;}\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ S-Text 0 - 15 ]*/\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.s2-txt1 {\r\n    font-family: Poppins-Medium;\r\n    font-size: 15px;\r\n    color: #333;\r\n    line-height: 1.2;\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ M-Text 16 - 25 ]*/\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.m2-txt1 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 24px;\r\n    color: #999;\r\n    line-height: 1.2;\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ L-Text >= 26 ]*/\r\n\r\n\r\n\r\n.l1-txt1 {\r\n    font-family: PlayfairDisplay-BlackItalic;\r\n    font-size: 90px;\r\n    color: #333;\r\n    line-height: 1.1;\r\n  }\r\n\r\n\r\n\r\n/*==================================================================\r\n     SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE SHAPE\r\n  ==================================================================*/\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Size ]*/\r\n\r\n\r\n\r\n.size1 {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n  }\r\n\r\n\r\n\r\n.size2 {\r\n    width: 90px;\r\n    height: 80px;\r\n  }\r\n\r\n\r\n\r\n.size3 {\r\n    width: 36px;\r\n    height: 36px;\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Width ]*/\r\n\r\n\r\n\r\n.wsize1 {\r\n    width: 50%;\r\n  }\r\n\r\n\r\n\r\n.wsize2 {\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Height ]*/\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Background ]*/\r\n\r\n\r\n\r\n.bg0 {background-color: #fff;}\r\n\r\n\r\n\r\n.bg-img1 {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Border ]*/\r\n\r\n\r\n\r\n/*==================================================================\r\n     WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE WHERE  \r\n  ==================================================================*/\r\n\r\n\r\n\r\n/*==================================================================\r\n   HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW HOW \r\n  ==================================================================*/\r\n\r\n\r\n\r\n.placeholder0::-webkit-input-placeholder { color: #999999;}\r\n\r\n\r\n\r\n.placeholder0:-moz-placeholder { color: #999999;}\r\n\r\n\r\n\r\n.placeholder0::-moz-placeholder { color: #999999;}\r\n\r\n\r\n\r\n.placeholder0:-ms-input-placeholder { color: #999999;}\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.overlay1 {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n\r\n.overlay1::after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.5);\r\n  }\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.wrappic1 {\r\n    display: block;\r\n  }\r\n\r\n\r\n\r\n.wrappic1 img {\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.how-btn1 {\r\n    padding: 0 15px;\r\n    background-color: #fff;\r\n    border-radius: 25px;\r\n  }\r\n\r\n\r\n\r\n.how-btn1:hover {\r\n    background-color: #555555;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.how-social {\r\n    color: #fff;\r\n    font-size: 22px;\r\n    background-color: #ccc;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n.how-social:hover {\r\n    background-color: #333;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ Pseudo ]*/\r\n\r\n\r\n\r\n/*------------------------------------------------------------------\r\n  [ Focus ]*/\r\n\r\n\r\n\r\n.focus-in0:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\n\r\n\r\n.focus-in0:focus:-moz-placeholder { color:transparent; }\r\n\r\n\r\n\r\n.focus-in0:focus::-moz-placeholder { color:transparent; }\r\n\r\n\r\n\r\n.focus-in0:focus:-ms-input-placeholder { color:transparent; }\r\n\r\n\r\n\r\n/*------------------------------------------------------------------\r\n  [ Hover ]*/\r\n\r\n\r\n\r\n.hov-cl0:hover {color: #fff;}\r\n\r\n\r\n\r\n.hov-bg0:hover {background-color: #fff;}\r\n\r\n\r\n\r\n/*---------------------------------------------*/\r\n\r\n\r\n\r\n.hov1:hover i {\r\n    transform: translateX(10px);\r\n  }\r\n\r\n\r\n\r\n/*==================================================================\r\n    RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE\r\n  ==================================================================*/\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ XL ]*/\r\n\r\n\r\n\r\n@media (max-width: 1200px) {\r\n    .m-0-xl {margin: 0;}\r\n    .m-lr-0-xl {margin-left: 0; margin-right: 0;}\r\n    .m-lr-15-xl {margin-left: 15px; margin-right: 15px;}\r\n    .m-l-0-xl {margin-left: 0;}\r\n    .m-r-0-xl {margin-right: 0;}\r\n    .m-l-15-xl {margin-left: 15px;}\r\n    .m-r-15-xl {margin-right: 15px;}\r\n  \r\n    .p-0-xl {padding: 0;}\r\n    .p-lr-0-xl {padding-left: 0; padding-right: 0;}\r\n    .p-lr-15-xl {padding-left: 15px; padding-right: 15px;}\r\n    .p-l-0-xl {padding-left: 0;}\r\n    .p-r-0-xl {padding-right: 0;}\r\n    .p-l-15-xl {padding-left: 15px;}\r\n    .p-r-15-xl {padding-right: 15px;}\r\n  \r\n    .w-full-xl {width: 100%;}\r\n  \r\n    /*---------------------------------------------*/\r\n    .respon1 {\r\n      width: 60%;\r\n    }\r\n  \r\n    /*---------------------------------------------*/\r\n    .respon2 {\r\n      width: 40%;\r\n    }\r\n  \r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ LG ]*/\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n    .dis-none-lg {display: none;}\r\n    .m-0-lg {margin: 0;}\r\n    .m-lr-0-lg {margin-left: 0; margin-right: 0;}\r\n    .m-lr-15-lg {margin-left: 15px; margin-right: 15px;}\r\n    .m-l-0-lg {margin-left: 0;}\r\n    .m-r-0-lg {margin-right: 0;}\r\n    .m-l-15-lg {margin-left: 15px;}\r\n    .m-r-15-lg {margin-right: 15px;}\r\n  \r\n    .p-0-lg {padding: 0;}\r\n    .p-lr-0-lg {padding-left: 0; padding-right: 0;}\r\n    .p-lr-15-lg {padding-left: 15px; padding-right: 15px;}\r\n    .p-l-0-lg {padding-left: 0;}\r\n    .p-r-0-lg{padding-right: 0;}\r\n    .p-l-15-lg {padding-left: 15px;}\r\n    .p-r-15-lg {padding-right: 15px;}\r\n  \r\n    .w-full-lg {width: 100%;}\r\n  \r\n    /*---------------------------------------------*/\r\n    .respon1 {\r\n      width: 100%;\r\n      padding-left: 15px;\r\n      padding-right: 15px;\r\n    }\r\n  \r\n    /*---------------------------------------------*/\r\n    .respon2 {\r\n      width: 100%;\r\n      height: 500px;\r\n    }\r\n  \r\n  \r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ MD ]*/\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .m-0-md {margin: 0;}\r\n    .m-lr-0-md {margin-left: 0; margin-right: 0;}\r\n    .m-lr-15-md {margin-left: 15px; margin-right: 15px;}\r\n    .m-l-0-md {margin-left: 0;}\r\n    .m-r-0-md {margin-right: 0;}\r\n    .m-l-15-md {margin-left: 15px;}\r\n    .m-r-15-md {margin-right: 15px;}\r\n  \r\n    .p-0-md {padding: 0;}\r\n    .p-lr-0-md {padding-left: 0; padding-right: 0;}\r\n    .p-lr-15-md {padding-left: 15px; padding-right: 15px;}\r\n    .p-l-0-md {padding-left: 0;}\r\n    .p-r-0-md{padding-right: 0;}\r\n    .p-l-15-md {padding-left: 15px;}\r\n    .p-r-15-md {padding-right: 15px;}\r\n  \r\n    .w-full-md {width: 100%;}\r\n    /*---------------------------------------------*/\r\n  \r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ SM ]*/\r\n\r\n\r\n\r\n@media (max-width: 576px) {\r\n    .dis-none-sm {display: none;}\r\n    .m-0-sm {margin: 0;}\r\n    .m-lr-0-sm {margin-left: 0; margin-right: 0;}\r\n    .m-lr-15-sm {margin-left: 15px; margin-right: 15px;}\r\n    .m-l-0-sm {margin-left: 0;}\r\n    .m-r-0-sm {margin-right: 0;}\r\n    .m-l-15-sm {margin-left: 15px;}\r\n    .m-r-15-sm {margin-right: 15px;}\r\n  \r\n    .p-0-sm {padding: 0;}\r\n    .p-lr-0-sm {padding-left: 0; padding-right: 0;}\r\n    .p-lr-15-sm {padding-left: 15px; padding-right: 15px;}\r\n    .p-l-0-sm {padding-left: 0;}\r\n    .p-r-0-sm{padding-right: 0;}\r\n    .p-l-15-sm {padding-left: 15px;}\r\n    .p-r-15-sm {padding-right: 15px;}\r\n  \r\n    .w-full-sm {width: 100%;}\r\n  \r\n    /*---------------------------------------------*/\r\n    .respon3 {\r\n      font-size: 60px;\r\n    }\r\n  \r\n    \r\n  }\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ SSM ]*/\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n    .m-0-ssm {margin: 0;}\r\n    .m-lr-0-ssm {margin-left: 0; margin-right: 0;}\r\n    .m-lr-15-ssm {margin-left: 15px; margin-right: 15px;}\r\n    .m-l-0-ssm {margin-left: 0;}\r\n    .m-r-0-ssm {margin-right: 0;}\r\n    .m-l-15-ssm {margin-left: 15px;}\r\n    .m-r-15-ssm {margin-right: 15px;}\r\n  \r\n    .p-0-ssm {padding: 0;}\r\n    .p-lr-0-ssm {padding-left: 0; padding-right: 0;}\r\n    .p-lr-15-ssm {padding-left: 15px; padding-right: 15px;}\r\n    .p-l-0-ssm {padding-left: 0;}\r\n    .p-r-0-ssm{padding-right: 0;}\r\n    .p-l-15-ssm {padding-left: 15px;}\r\n    .p-r-15-ssm {padding-right: 15px;}\r\n  \r\n    .w-full-ssm {width: 100%;}\r\n    /*---------------------------------------------*/\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9jb25zdHJ1Y3Rpb24vY29uc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztvRUFNb0U7Ozs7QUFJcEU7U0FDUzs7OztBQUVQO2dCQUNjOzs7O0FBQ2QsZ0RBQWdEOzs7O0FBQ2hELFlBQVksaUJBQWlCLENBQUM7Ozs7QUFHOUI7V0FDUzs7OztBQUNUO0lBQ0UsZUFBZTtFQUNqQjs7OztBQUNBO1lBQ1U7Ozs7QUFFVjtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7Ozs7QUFFQSxnREFBZ0Q7Ozs7QUFDaEQ7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCOztJQUV0QiwyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELG1EQUFtRDtJQUNuRCw4Q0FBOEM7SUFDOUMsK0NBQStDO0VBQ2pEOzs7O0FBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELG1EQUFtRDtJQUNuRCw4Q0FBOEM7SUFDOUMsK0NBQStDO0VBQ2pEOzs7O0FBR0E7cUJBQ21COzs7O0FBRW5CO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7O0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsUUFBUTtJQUtSLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsb0JBQW9COztJQUVwQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUtWLHdCQUF3QjtFQUMxQjs7OztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsUUFBUTtJQUtSLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7Ozs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7Ozs7QUFFQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLFVBQVU7SUFDWjtFQUNGOzs7O0FBR0E7c0JBQ29COzs7O0FBQ3BCO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7OztBQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztFQUNUOzs7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87RUFDVDs7OztBQUlBOztxRUFFbUU7Ozs7QUFFbkU7WUFDVTs7OztBQUNWLE1BQU0sV0FBVyxDQUFDOzs7O0FBQ2xCLE1BQU0sV0FBVyxDQUFDOzs7O0FBS2xCO29CQUNrQjs7OztBQUVsQixnREFBZ0Q7Ozs7QUFDaEQ7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7Ozs7QUFJQTtxQkFDbUI7Ozs7QUFFbkIsZ0RBQWdEOzs7O0FBQ2hEO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOzs7O0FBSUE7bUJBQ2lCOzs7O0FBQ2pCO0lBQ0Usd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOzs7O0FBR0E7O3FFQUVtRTs7OztBQUNuRTtXQUNTOzs7O0FBQ1Q7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COzs7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOzs7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOzs7O0FBRUE7WUFDVTs7OztBQUNWO0lBQ0UsVUFBVTtFQUNaOzs7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOzs7O0FBRUE7YUFDVzs7OztBQUtYO2lCQUNlOzs7O0FBQ2YsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU3QjtJQUNFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOzs7O0FBS0E7YUFDVzs7OztBQU1YOztxRUFFbUU7Ozs7QUFLbkU7O3FFQUVtRTs7OztBQUNuRSwyQ0FBMkMsY0FBYyxDQUFDOzs7O0FBQzFELGlDQUFpQyxjQUFjLENBQUM7Ozs7QUFDaEQsa0NBQWtDLGNBQWMsQ0FBQzs7OztBQUNqRCxzQ0FBc0MsY0FBYyxDQUFDOzs7O0FBR3JELGdEQUFnRDs7OztBQUNoRDtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsMkJBQTJCO0VBQzdCOzs7O0FBRUEsZ0RBQWdEOzs7O0FBQ2hEO0lBQ0UsY0FBYztFQUNoQjs7OztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7OztBQUVBLGdEQUFnRDs7OztBQUNoRDtJQUNFLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOzs7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiOzs7O0FBRUEsZ0RBQWdEOzs7O0FBQ2hEO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOzs7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiOzs7O0FBR0E7YUFDVzs7OztBQUVYO1lBQ1U7Ozs7QUFDViw4Q0FBOEMsaUJBQWlCLEVBQUU7Ozs7QUFDakUsb0NBQW9DLGlCQUFpQixFQUFFOzs7O0FBQ3ZELHFDQUFxQyxpQkFBaUIsRUFBRTs7OztBQUN4RCx5Q0FBeUMsaUJBQWlCLEVBQUU7Ozs7QUFHNUQ7WUFDVTs7OztBQUNWLGdCQUFnQixXQUFXLENBQUM7Ozs7QUFDNUIsZ0JBQWdCLHNCQUFzQixDQUFDOzs7O0FBRXZDLGdEQUFnRDs7OztBQUNoRDtJQUtFLDJCQUEyQjtFQUM3Qjs7OztBQU9BOztxRUFFbUU7Ozs7QUFHbkU7U0FDTzs7OztBQUNQO0lBQ0UsU0FBUyxTQUFTLENBQUM7SUFDbkIsWUFBWSxjQUFjLEVBQUUsZUFBZSxDQUFDO0lBQzVDLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7SUFDbkQsV0FBVyxjQUFjLENBQUM7SUFDMUIsV0FBVyxlQUFlLENBQUM7SUFDM0IsWUFBWSxpQkFBaUIsQ0FBQztJQUM5QixZQUFZLGtCQUFrQixDQUFDOztJQUUvQixTQUFTLFVBQVUsQ0FBQztJQUNwQixZQUFZLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5QyxhQUFhLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO0lBQ3JELFdBQVcsZUFBZSxDQUFDO0lBQzNCLFdBQVcsZ0JBQWdCLENBQUM7SUFDNUIsWUFBWSxrQkFBa0IsQ0FBQztJQUMvQixZQUFZLG1CQUFtQixDQUFDOztJQUVoQyxZQUFZLFdBQVcsQ0FBQzs7SUFFeEIsZ0RBQWdEO0lBQ2hEO01BQ0UsVUFBVTtJQUNaOztJQUVBLGdEQUFnRDtJQUNoRDtNQUNFLFVBQVU7SUFDWjs7RUFFRjs7OztBQUdBO1NBQ087Ozs7QUFDUDtJQUNFLGNBQWMsYUFBYSxDQUFDO0lBQzVCLFNBQVMsU0FBUyxDQUFDO0lBQ25CLFlBQVksY0FBYyxFQUFFLGVBQWUsQ0FBQztJQUM1QyxhQUFhLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO0lBQ25ELFdBQVcsY0FBYyxDQUFDO0lBQzFCLFdBQVcsZUFBZSxDQUFDO0lBQzNCLFlBQVksaUJBQWlCLENBQUM7SUFDOUIsWUFBWSxrQkFBa0IsQ0FBQzs7SUFFL0IsU0FBUyxVQUFVLENBQUM7SUFDcEIsWUFBWSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7SUFDOUMsYUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztJQUNyRCxXQUFXLGVBQWUsQ0FBQztJQUMzQixVQUFVLGdCQUFnQixDQUFDO0lBQzNCLFlBQVksa0JBQWtCLENBQUM7SUFDL0IsWUFBWSxtQkFBbUIsQ0FBQzs7SUFFaEMsWUFBWSxXQUFXLENBQUM7O0lBRXhCLGdEQUFnRDtJQUNoRDtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsbUJBQW1CO0lBQ3JCOztJQUVBLGdEQUFnRDtJQUNoRDtNQUNFLFdBQVc7TUFDWCxhQUFhO0lBQ2Y7OztFQUdGOzs7O0FBR0E7U0FDTzs7OztBQUNQO0lBQ0UsU0FBUyxTQUFTLENBQUM7SUFDbkIsWUFBWSxjQUFjLEVBQUUsZUFBZSxDQUFDO0lBQzVDLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7SUFDbkQsV0FBVyxjQUFjLENBQUM7SUFDMUIsV0FBVyxlQUFlLENBQUM7SUFDM0IsWUFBWSxpQkFBaUIsQ0FBQztJQUM5QixZQUFZLGtCQUFrQixDQUFDOztJQUUvQixTQUFTLFVBQVUsQ0FBQztJQUNwQixZQUFZLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5QyxhQUFhLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO0lBQ3JELFdBQVcsZUFBZSxDQUFDO0lBQzNCLFVBQVUsZ0JBQWdCLENBQUM7SUFDM0IsWUFBWSxrQkFBa0IsQ0FBQztJQUMvQixZQUFZLG1CQUFtQixDQUFDOztJQUVoQyxZQUFZLFdBQVcsQ0FBQztJQUN4QixnREFBZ0Q7O0VBRWxEOzs7O0FBR0E7U0FDTzs7OztBQUNQO0lBQ0UsY0FBYyxhQUFhLENBQUM7SUFDNUIsU0FBUyxTQUFTLENBQUM7SUFDbkIsWUFBWSxjQUFjLEVBQUUsZUFBZSxDQUFDO0lBQzVDLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7SUFDbkQsV0FBVyxjQUFjLENBQUM7SUFDMUIsV0FBVyxlQUFlLENBQUM7SUFDM0IsWUFBWSxpQkFBaUIsQ0FBQztJQUM5QixZQUFZLGtCQUFrQixDQUFDOztJQUUvQixTQUFTLFVBQVUsQ0FBQztJQUNwQixZQUFZLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5QyxhQUFhLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO0lBQ3JELFdBQVcsZUFBZSxDQUFDO0lBQzNCLFVBQVUsZ0JBQWdCLENBQUM7SUFDM0IsWUFBWSxrQkFBa0IsQ0FBQztJQUMvQixZQUFZLG1CQUFtQixDQUFDOztJQUVoQyxZQUFZLFdBQVcsQ0FBQzs7SUFFeEIsZ0RBQWdEO0lBQ2hEO01BQ0UsZUFBZTtJQUNqQjs7O0VBR0Y7Ozs7QUFHQTtVQUNROzs7O0FBQ1I7SUFDRSxVQUFVLFNBQVMsQ0FBQztJQUNwQixhQUFhLGNBQWMsRUFBRSxlQUFlLENBQUM7SUFDN0MsY0FBYyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztJQUNwRCxZQUFZLGNBQWMsQ0FBQztJQUMzQixZQUFZLGVBQWUsQ0FBQztJQUM1QixhQUFhLGlCQUFpQixDQUFDO0lBQy9CLGFBQWEsa0JBQWtCLENBQUM7O0lBRWhDLFVBQVUsVUFBVSxDQUFDO0lBQ3JCLGFBQWEsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0lBQy9DLGNBQWMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7SUFDdEQsWUFBWSxlQUFlLENBQUM7SUFDNUIsV0FBVyxnQkFBZ0IsQ0FBQztJQUM1QixhQUFhLGtCQUFrQixDQUFDO0lBQ2hDLGFBQWEsbUJBQW1CLENBQUM7O0lBRWpDLGFBQWEsV0FBVyxDQUFDO0lBQ3pCLGdEQUFnRDs7RUFFbEQiLCJmaWxlIjoic3JjL2FwcC92aWV3L2NvbnN0cnVjdGlvbi9jb25zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblByb2plY3Q6ICBDb21pbmdTb29uXHJcblZlcnNpb246ICBcclxuTGFzdCBjaGFuZ2U6ICBcclxuQXNzaWduZWQgdG86ICBCYWNoIExlXHJcblByaW1hcnkgdXNlOiAgXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5bIEZPTlQgXSovXHJcblxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBSUyBQTFVHSU4gXSovXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5jb250YWluZXIge21heC13aWR0aDogMTIwMHB4O31cclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgRm9ybSBdKi9cclxuICAuY29udGFjdDEwMC1mb3JtIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIElucHV0IF0qL1xyXG4gIFxyXG4gIC53cmFwLWlucHV0MTAwIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmlucHV0MTAwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDkwcHggMCAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgQWxlcnQgdmFsaWRhdGUgXSovXHJcbiAgXHJcbiAgLnZhbGlkYXRlLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICByaWdodDogODJweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xyXG4gICAgY29sb3I6ICNjODAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtdmFsaWRhdGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDcxXCI7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjYzgwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OiA4OHB4O1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFNpbXBsZSBzbGlkZTEwMCBdKi9cclxuICAuc2ltcGxlc2xpZGUxMDAtcGFyZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaW1wbGVzbGlkZTEwMCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuc2ltcGxlc2xpZGUxMDAtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgVEVYVCBURVhUIFRFWFQgVEVYVCBURVhUIFRFWFQgVEVYVCBURVhUIFRFWFQgVEVYVCBURVhUIFRFWFQgVEVYVFxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBbIENvbG9yIF0qL1xyXG4gIC5jbDAge2NvbG9yOiAjZmZmO31cclxuICAuY2wxIHtjb2xvcjogIzMzMzt9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFMtVGV4dCAwIC0gMTUgXSovXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5zMi10eHQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIE0tVGV4dCAxNiAtIDI1IF0qL1xyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAubTItdHh0MSB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgTC1UZXh0ID49IDI2IF0qL1xyXG4gIC5sMS10eHQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpckRpc3BsYXktQmxhY2tJdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEUgU0hBUEVcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBTaXplIF0qL1xyXG4gIC5zaXplMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAuc2l6ZTIge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaXplMyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICB9XHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFdpZHRoIF0qL1xyXG4gIC53c2l6ZTEge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLndzaXplMiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBIZWlnaHQgXSovXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIEJhY2tncm91bmQgXSovXHJcbiAgLmJnMCB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbiAgXHJcbiAgLmJnLWltZzEge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBCb3JkZXIgXSovXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSBXSEVSRSAgXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBIT1cgSE9XIEhPVyBIT1cgSE9XIEhPVyBIT1cgSE9XIEhPVyBIT1cgSE9XIEhPVyBIT1cgSE9XIEhPVyBIT1cgSE9XIFxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgLnBsYWNlaG9sZGVyMDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICAucGxhY2Vob2xkZXIwOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XHJcbiAgLnBsYWNlaG9sZGVyMDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICAucGxhY2Vob2xkZXIwOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLm92ZXJsYXkxIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5vdmVybGF5MTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAud3JhcHBpYzEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGljMSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmhvdy1idG4xIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuaG93LWJ0bjE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmhvdy1zb2NpYWwge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuaG93LXNvY2lhbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBQc2V1ZG8gXSovXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEZvY3VzIF0qL1xyXG4gIC5mb2N1cy1pbjA6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIC5mb2N1cy1pbjA6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgLmZvY3VzLWluMDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgLmZvY3VzLWluMDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBIb3ZlciBdKi9cclxuICAuaG92LWNsMDpob3ZlciB7Y29sb3I6ICNmZmY7fVxyXG4gIC5ob3YtYmcwOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmhvdjE6aG92ZXIgaSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFJFU1BPTlNJVkUgUkVTUE9OU0lWRSBSRVNQT05TSVZFIFJFU1BPTlNJVkUgUkVTUE9OU0lWRSBSRVNQT05TSVZFXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgWEwgXSovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLm0tMC14bCB7bWFyZ2luOiAwO31cclxuICAgIC5tLWxyLTAteGwge21hcmdpbi1sZWZ0OiAwOyBtYXJnaW4tcmlnaHQ6IDA7fVxyXG4gICAgLm0tbHItMTUteGwge21hcmdpbi1sZWZ0OiAxNXB4OyBtYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4gICAgLm0tbC0wLXhsIHttYXJnaW4tbGVmdDogMDt9XHJcbiAgICAubS1yLTAteGwge21hcmdpbi1yaWdodDogMDt9XHJcbiAgICAubS1sLTE1LXhsIHttYXJnaW4tbGVmdDogMTVweDt9XHJcbiAgICAubS1yLTE1LXhsIHttYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4gIFxyXG4gICAgLnAtMC14bCB7cGFkZGluZzogMDt9XHJcbiAgICAucC1sci0wLXhsIHtwYWRkaW5nLWxlZnQ6IDA7IHBhZGRpbmctcmlnaHQ6IDA7fVxyXG4gICAgLnAtbHItMTUteGwge3BhZGRpbmctbGVmdDogMTVweDsgcGFkZGluZy1yaWdodDogMTVweDt9XHJcbiAgICAucC1sLTAteGwge3BhZGRpbmctbGVmdDogMDt9XHJcbiAgICAucC1yLTAteGwge3BhZGRpbmctcmlnaHQ6IDA7fVxyXG4gICAgLnAtbC0xNS14bCB7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxuICAgIC5wLXItMTUteGwge3BhZGRpbmctcmlnaHQ6IDE1cHg7fVxyXG4gIFxyXG4gICAgLnctZnVsbC14bCB7d2lkdGg6IDEwMCU7fVxyXG4gIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLnJlc3BvbjEge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLnJlc3BvbjIge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgTEcgXSovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuZGlzLW5vbmUtbGcge2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgLm0tMC1sZyB7bWFyZ2luOiAwO31cclxuICAgIC5tLWxyLTAtbGcge21hcmdpbi1sZWZ0OiAwOyBtYXJnaW4tcmlnaHQ6IDA7fVxyXG4gICAgLm0tbHItMTUtbGcge21hcmdpbi1sZWZ0OiAxNXB4OyBtYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4gICAgLm0tbC0wLWxnIHttYXJnaW4tbGVmdDogMDt9XHJcbiAgICAubS1yLTAtbGcge21hcmdpbi1yaWdodDogMDt9XHJcbiAgICAubS1sLTE1LWxnIHttYXJnaW4tbGVmdDogMTVweDt9XHJcbiAgICAubS1yLTE1LWxnIHttYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4gIFxyXG4gICAgLnAtMC1sZyB7cGFkZGluZzogMDt9XHJcbiAgICAucC1sci0wLWxnIHtwYWRkaW5nLWxlZnQ6IDA7IHBhZGRpbmctcmlnaHQ6IDA7fVxyXG4gICAgLnAtbHItMTUtbGcge3BhZGRpbmctbGVmdDogMTVweDsgcGFkZGluZy1yaWdodDogMTVweDt9XHJcbiAgICAucC1sLTAtbGcge3BhZGRpbmctbGVmdDogMDt9XHJcbiAgICAucC1yLTAtbGd7cGFkZGluZy1yaWdodDogMDt9XHJcbiAgICAucC1sLTE1LWxnIHtwYWRkaW5nLWxlZnQ6IDE1cHg7fVxyXG4gICAgLnAtci0xNS1sZyB7cGFkZGluZy1yaWdodDogMTVweDt9XHJcbiAgXHJcbiAgICAudy1mdWxsLWxnIHt3aWR0aDogMTAwJTt9XHJcbiAgXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAucmVzcG9uMSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAucmVzcG9uMiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgTUQgXSovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubS0wLW1kIHttYXJnaW46IDA7fVxyXG4gICAgLm0tbHItMC1tZCB7bWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi1yaWdodDogMDt9XHJcbiAgICAubS1sci0xNS1tZCB7bWFyZ2luLWxlZnQ6IDE1cHg7IG1hcmdpbi1yaWdodDogMTVweDt9XHJcbiAgICAubS1sLTAtbWQge21hcmdpbi1sZWZ0OiAwO31cclxuICAgIC5tLXItMC1tZCB7bWFyZ2luLXJpZ2h0OiAwO31cclxuICAgIC5tLWwtMTUtbWQge21hcmdpbi1sZWZ0OiAxNXB4O31cclxuICAgIC5tLXItMTUtbWQge21hcmdpbi1yaWdodDogMTVweDt9XHJcbiAgXHJcbiAgICAucC0wLW1kIHtwYWRkaW5nOiAwO31cclxuICAgIC5wLWxyLTAtbWQge3BhZGRpbmctbGVmdDogMDsgcGFkZGluZy1yaWdodDogMDt9XHJcbiAgICAucC1sci0xNS1tZCB7cGFkZGluZy1sZWZ0OiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4O31cclxuICAgIC5wLWwtMC1tZCB7cGFkZGluZy1sZWZ0OiAwO31cclxuICAgIC5wLXItMC1tZHtwYWRkaW5nLXJpZ2h0OiAwO31cclxuICAgIC5wLWwtMTUtbWQge3BhZGRpbmctbGVmdDogMTVweDt9XHJcbiAgICAucC1yLTE1LW1kIHtwYWRkaW5nLXJpZ2h0OiAxNXB4O31cclxuICBcclxuICAgIC53LWZ1bGwtbWQge3dpZHRoOiAxMDAlO31cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFNNIF0qL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmRpcy1ub25lLXNtIHtkaXNwbGF5OiBub25lO31cclxuICAgIC5tLTAtc20ge21hcmdpbjogMDt9XHJcbiAgICAubS1sci0wLXNtIHttYXJnaW4tbGVmdDogMDsgbWFyZ2luLXJpZ2h0OiAwO31cclxuICAgIC5tLWxyLTE1LXNtIHttYXJnaW4tbGVmdDogMTVweDsgbWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuICAgIC5tLWwtMC1zbSB7bWFyZ2luLWxlZnQ6IDA7fVxyXG4gICAgLm0tci0wLXNtIHttYXJnaW4tcmlnaHQ6IDA7fVxyXG4gICAgLm0tbC0xNS1zbSB7bWFyZ2luLWxlZnQ6IDE1cHg7fVxyXG4gICAgLm0tci0xNS1zbSB7bWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuICBcclxuICAgIC5wLTAtc20ge3BhZGRpbmc6IDA7fVxyXG4gICAgLnAtbHItMC1zbSB7cGFkZGluZy1sZWZ0OiAwOyBwYWRkaW5nLXJpZ2h0OiAwO31cclxuICAgIC5wLWxyLTE1LXNtIHtwYWRkaW5nLWxlZnQ6IDE1cHg7IHBhZGRpbmctcmlnaHQ6IDE1cHg7fVxyXG4gICAgLnAtbC0wLXNtIHtwYWRkaW5nLWxlZnQ6IDA7fVxyXG4gICAgLnAtci0wLXNte3BhZGRpbmctcmlnaHQ6IDA7fVxyXG4gICAgLnAtbC0xNS1zbSB7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxuICAgIC5wLXItMTUtc20ge3BhZGRpbmctcmlnaHQ6IDE1cHg7fVxyXG4gIFxyXG4gICAgLnctZnVsbC1zbSB7d2lkdGg6IDEwMCU7fVxyXG4gIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLnJlc3BvbjMge1xyXG4gICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFNTTSBdKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5tLTAtc3NtIHttYXJnaW46IDA7fVxyXG4gICAgLm0tbHItMC1zc20ge21hcmdpbi1sZWZ0OiAwOyBtYXJnaW4tcmlnaHQ6IDA7fVxyXG4gICAgLm0tbHItMTUtc3NtIHttYXJnaW4tbGVmdDogMTVweDsgbWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuICAgIC5tLWwtMC1zc20ge21hcmdpbi1sZWZ0OiAwO31cclxuICAgIC5tLXItMC1zc20ge21hcmdpbi1yaWdodDogMDt9XHJcbiAgICAubS1sLTE1LXNzbSB7bWFyZ2luLWxlZnQ6IDE1cHg7fVxyXG4gICAgLm0tci0xNS1zc20ge21hcmdpbi1yaWdodDogMTVweDt9XHJcbiAgXHJcbiAgICAucC0wLXNzbSB7cGFkZGluZzogMDt9XHJcbiAgICAucC1sci0wLXNzbSB7cGFkZGluZy1sZWZ0OiAwOyBwYWRkaW5nLXJpZ2h0OiAwO31cclxuICAgIC5wLWxyLTE1LXNzbSB7cGFkZGluZy1sZWZ0OiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4O31cclxuICAgIC5wLWwtMC1zc20ge3BhZGRpbmctbGVmdDogMDt9XHJcbiAgICAucC1yLTAtc3Nte3BhZGRpbmctcmlnaHQ6IDA7fVxyXG4gICAgLnAtbC0xNS1zc20ge3BhZGRpbmctbGVmdDogMTVweDt9XHJcbiAgICAucC1yLTE1LXNzbSB7cGFkZGluZy1yaWdodDogMTVweDt9XHJcbiAgXHJcbiAgICAudy1mdWxsLXNzbSB7d2lkdGg6IDEwMCU7fVxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/view/construction/construction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view/construction/construction.component.ts ***!
  \*************************************************************/
/*! exports provided: ConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructionComponent", function() { return ConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConstructionComponent = /** @class */ (function () {
    function ConstructionComponent() {
    }
    ConstructionComponent.prototype.ngOnInit = function () {
    };
    ConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-construction',
            template: __webpack_require__(/*! raw-loader!./construction.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/construction/construction.component.html"),
            styles: [__webpack_require__(/*! ./construction.component.css */ "./src/app/view/construction/construction.component.css")]
        })
    ], ConstructionComponent);
    return ConstructionComponent;
}());



/***/ }),

/***/ "./src/app/view/djubrivo/djubrivo.component.css":
/*!******************************************************!*\
  !*** ./src/app/view/djubrivo/djubrivo.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZGp1YnJpdm8vZGp1YnJpdm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/djubrivo/djubrivo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/djubrivo/djubrivo.component.ts ***!
  \*****************************************************/
/*! exports provided: DjubrivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DjubrivoComponent", function() { return DjubrivoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DjubrivoComponent = /** @class */ (function () {
    function DjubrivoComponent(mservice, router) {
        this.mservice = mservice;
        this.router = router;
        this.form_naziv = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.msg = false;
    }
    DjubrivoComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
    };
    DjubrivoComponent.prototype.addButton = function () {
        var _this = this;
        if (this.form_naziv.value == "") {
            this.msg = true;
            return;
        }
        this.msg = false;
        this.mservice.addDjubrivo(this.form_naziv.value).subscribe(function (data) {
            alert("Dodato novo djubrivo");
            _this.router.navigate(['početna']);
        });
    };
    DjubrivoComponent.ctorParameters = function () { return [
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__["MagacinService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DjubrivoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-djubrivo',
            template: __webpack_require__(/*! raw-loader!./djubrivo.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/djubrivo/djubrivo.component.html"),
            styles: [__webpack_require__(/*! ./djubrivo.component.css */ "./src/app/view/djubrivo/djubrivo.component.css")]
        })
    ], DjubrivoComponent);
    return DjubrivoComponent;
}());



/***/ }),

/***/ "./src/app/view/homepage/homepage.component.css":
/*!******************************************************!*\
  !*** ./src/app/view/homepage/homepage.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_Promena__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Promena */ "./src/app/models/Promena.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(mservice, router) {
        this.mservice = mservice;
        this.router = router;
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.datum = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.smer_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_vanstandardno = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_25 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.podsmer_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_50 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_500 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_600 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_1000 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_rinfuza = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.form_1000neegal = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
            _this.mservice.getAllRoba().subscribe(function (robs) {
                _this.roba = robs;
                _this.mservice.getAllLots().subscribe(function (lt) {
                    _this.lots = lt;
                });
            });
        });
        console.clear();
    };
    HomepageComponent.prototype.testButton = function () {
        if (this.magacin_form.value == "default" || this.magacin_form.value == "") {
            alert("Morate uneti magacin");
            return;
        }
        if (this.djubrivo_form.value == "default" || this.djubrivo_form.value == "") {
            alert("Morate uneti vrstu djubriva");
            return;
        }
        if (this.lot_form.value == "default" || this.lot_form.value == "") {
            alert("Morate uneti LOT");
            return;
        }
        if (this.smer_form.value == "default" || this.smer_form.value == "") {
            alert("Morate uneti smer");
            return;
        }
        if (this.datum.value == "") {
            alert("Morate uneti datum");
            return;
        }
        var obj2send = new src_app_models_Promena__WEBPACK_IMPORTED_MODULE_4__["Promena"]();
        obj2send.magacinId = this.magacin_form.value;
        obj2send.robaId = this.djubrivo_form.value;
        obj2send.lotId = this.lot_form.value;
        obj2send.smer = this.smer_form.value;
        var map = {};
        map[1] = this.form_25.value || 0;
        map[2] = this.form_50.value || 0;
        map[3] = this.form_500.value || 0;
        map[4] = this.form_600.value || 0;
        map[5] = this.form_1000.value || 0;
        map[6] = this.form_rinfuza.value || 0;
        map[7] = this.form_vanstandardno.value || 0;
        map[8] = this.form_1000neegal.value || 0;
        obj2send.promet = map;
        obj2send.podsmer = this.podsmer_form.value;
        obj2send.datum = this.datum.value;
        this.mservice.promena(obj2send).subscribe(function (data) {
            console.log(data);
            if (data != null) {
                alert("Uspesno uneseno!");
                //location.reload();
            }
        }, function (error) {
            console.log(error);
            alert(error.error.message);
        });
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_2__["MagacinService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/view/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/view/izvestajdetalj/izvestajdetalj.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/izvestajdetalj/izvestajdetalj.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaXp2ZXN0YWpkZXRhbGovaXp2ZXN0YWpkZXRhbGouY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/izvestajdetalj/izvestajdetalj.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/izvestajdetalj/izvestajdetalj.component.ts ***!
  \*****************************************************************/
/*! exports provided: IzvestajdetaljComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzvestajdetaljComponent", function() { return IzvestajdetaljComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var IzvestajdetaljComponent = /** @class */ (function () {
    function IzvestajdetaljComponent(mservice, router) {
        this.mservice = mservice;
        this.router = router;
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.smer_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.datum = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.message = false;
    }
    IzvestajdetaljComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
        });
    };
    IzvestajdetaljComponent.prototype.getNaDan = function () {
        var _this = this;
        var obj2send = {
            "magacinId": this.magacin_form.value,
            "smer": this.smer_form.value,
            "datum": this.datum.value
        };
        this.string = this.smer_form.value == "ulaz" ? "Ukupno utovareno:" : "Ukupno istovareno:";
        console.log(obj2send);
        this.mservice.izvestajDetaljno(obj2send).subscribe(function (data) {
            console.log(data);
            if (data == null) {
                _this.message = true;
                return;
            }
            _this.message = false;
            _this.value = data;
            _this.value = _this.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
    };
    IzvestajdetaljComponent.ctorParameters = function () { return [
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__["MagacinService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    IzvestajdetaljComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izvestajdetalj',
            template: __webpack_require__(/*! raw-loader!./izvestajdetalj.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/izvestajdetalj/izvestajdetalj.component.html"),
            styles: [__webpack_require__(/*! ./izvestajdetalj.component.css */ "./src/app/view/izvestajdetalj/izvestajdetalj.component.css")]
        })
    ], IzvestajdetaljComponent);
    return IzvestajdetaljComponent;
}());



/***/ }),

/***/ "./src/app/view/izvestajrepro/izvestajrepro.component.css":
/*!****************************************************************!*\
  !*** ./src/app/view/izvestajrepro/izvestajrepro.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaXp2ZXN0YWpyZXByby9penZlc3RhanJlcHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/izvestajrepro/izvestajrepro.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/izvestajrepro/izvestajrepro.component.ts ***!
  \***************************************************************/
/*! exports provided: IzvestajreproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzvestajreproComponent", function() { return IzvestajreproComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);








var IzvestajreproComponent = /** @class */ (function () {
    function IzvestajreproComponent(mservice, router) {
        this.mservice = mservice;
        this.router = router;
        this.datumOd = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.datumDo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.napomena_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.columns = ["Datum", "Djubrivo", "Materijal", "Smer", "Kolicina", "Stanje", "Lot", "Napomena"];
        this.msg = false;
        this.showTable = false;
        this.sortex = false;
        this.nema = false;
    }
    IzvestajreproComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
        });
    };
    IzvestajreproComponent.prototype.sortByDate = function () {
        console.table(this.obj4table);
        this.sortex = !this.sortex;
        if (this.sortex) {
            this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](this.obj4table, 'datum');
        }
        else {
            this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](this.obj4table, 'datum').reverse();
        }
    };
    IzvestajreproComponent.prototype.addNapomena = function (id) {
        console.log(id);
        if (this.napomena_form.value == "") {
            alert("Unesite napomenu.");
            return;
        }
        var obj2send = {
            "napomena": this.napomena_form.value,
            "id": id.id
        };
        this.mservice.addNapomenaRepro(obj2send).subscribe(function (data) {
            alert("Dodata napomena");
            id.hasNapomena = true;
            id.napomena = data.napomena;
        });
        this.napomena_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
    };
    IzvestajreproComponent.prototype.showTa = function () {
        var _this = this;
        if (this.magacin_form.value == "") {
            this.msg = true;
            return;
        }
        this.showTable = true;
        this.obj2filter = {
            magacinId: this.magacin_form.value,
            pDatum: this.datumOd.value || "",
            kDatum: this.datumDo.value || "",
        };
        this.mservice.getAllPromenaRepro(this.obj2filter).subscribe(function (data) {
            console.log("promene");
            _this.obj4table = data;
            _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](_this.obj4table, 'datum').reverse();
            console.log(_this.obj4table);
            if (_this.obj4table.length == 0) {
                _this.showTable = false;
                _this.nema = true;
            }
            else {
                _this.showTable = true;
                _this.nema = false;
            }
            var summ = 0;
            _this.obj4table.forEach(function (element) {
                summ += element.kolicina;
                if (element.smer == 'ulaz kupac') {
                    element.smer = 'ulaz';
                }
                if (element.novoStanje <= 100) {
                    element.urgent = true;
                    element.needed = false;
                }
                else if (element.novoStanje <= 500 && element.novoStanje > 100) {
                    element.urgent = false;
                    element.needed = true;
                }
                else {
                    element.urgent = false;
                    element.needed = false;
                }
                if (element.napomena == "" || element.napomena == null || element.napomena == undefined) {
                    element.hasNapomena = false;
                }
                else {
                    element.hasNapomena = true;
                }
            });
            console.log("konacno");
            console.log(_this.obj4table);
            var sumElement = { datum: "", pakovanjeNaziv: "", smer: "", kolicina: null, novoStanje: "", lotNaziv: "", napomena: "" };
            sumElement.kolicina = summ;
            sumElement.kolicina = sumElement.kolicina.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            _this.obj4table.push(sumElement);
        });
        this.headerobj = {
            mag: this.obj4table[0].magacinNaziv,
            rob: this.obj4table[0].robaNaziv,
            lot: this.obj4table[0].lotNaziv
        };
        console.clear();
    };
    IzvestajreproComponent.prototype.downloadAsPdf = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__();
        doc.autoTable({ html: '#tableid' });
        doc.save("Izve\u0161taj-" + this.obj4table[0].magacinNaziv + "-" + this.obj4table[0].robaNaziv + "-" + new Date().toLocaleDateString() + ".pdf");
        console.clear();
        /*
      doc.setFontSize(20);
      doc.setFont('Georgia','serif');
      var img = new Image();
      img.src = '../../assets/logo.png';
      doc.addImage(img, 'PNG', 12, 10);
      doc.text(12, 40, `${this.obj4table[0].magacinNaziv}`);
      doc.text(12, 50, `${this.obj4table[0].robaNaziv}`);
      doc.text(12, 60, `LOT${this.obj4table[0].lotNaziv}`);
      
      let element = <HTMLScriptElement>document.getElementById("tableid");
  
    
      html2canvas(element)
        .then((canvas: any) => {
            console.log(element);
            doc.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 12,70,
                          doc.internal.pageSize.width/1.3, element.offsetHeight/4 );
            doc.save(`Izveštaj-${Date.now()}.pdf`);
        })
  
  */
    };
    IzvestajreproComponent.ctorParameters = function () { return [
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_4__["MagacinService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    IzvestajreproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izvestajrepro',
            template: __webpack_require__(/*! raw-loader!./izvestajrepro.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/izvestajrepro/izvestajrepro.component.html"),
            styles: [__webpack_require__(/*! ./izvestajrepro.component.css */ "./src/app/view/izvestajrepro/izvestajrepro.component.css")]
        })
    ], IzvestajreproComponent);
    return IzvestajreproComponent;
}());



/***/ }),

/***/ "./src/app/view/lagerlista/lagerlista.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/lagerlista/lagerlista.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tableid{\r\n    font-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9sYWdlcmxpc3RhL2xhZ2VybGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3L2xhZ2VybGlzdGEvbGFnZXJsaXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RhYmxlaWR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/lagerlista/lagerlista.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/lagerlista/lagerlista.component.ts ***!
  \*********************************************************/
/*! exports provided: LagerlistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LagerlistaComponent", function() { return LagerlistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var LagerlistaComponent = /** @class */ (function () {
    function LagerlistaComponent(router, mservice) {
        this.router = router;
        this.mservice = mservice;
        this.columns = ["Pakovanje", "Smer", "Kolicina"];
        this.obj4table = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.stanjemessage = false;
        this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.pedeset = [];
        this.kcl = [];
        this.urea = [];
        this.gran = [];
        this.san = [];
        this.kan = [];
        this.amon = [];
        this.map = [];
        this.np = [];
        this.ureapril = [];
        this.magacinNSP6 = [];
        this.magacinNSR3 = [];
        this.magacinVRK2 = [];
        this.magacinPAP10 = [];
        this.magacinSKDMT = [];
        this.magacinNSUS = [];
        this.magacinPAUS = [];
        this.svimagacinisvimarlepi = [];
        this.dap = [];
        this.npkFoksan = [];
        this.npk16168 = [];
        this.sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.toShow = [];
        this.tableShow = [];
        this.vrednosti25 = [];
        this.showTable = false;
        this.detaljnoSvi = false;
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.novakolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.magacinizmena_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.showDropdown = false;
        this.mag = "";
        this.dropdownSettings = {
            singleSelection: false,
            text: "Odaberite magacine",
            selectAllText: 'Odaberite sve',
            unSelectAllText: 'Resetuj sve',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
    }
    LagerlistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
            _this.magacini.forEach(function (ele) {
                _this.dropdownList.push({ id: ele.item_id, itemName: ele.item_text });
            });
            if (_this.dropdownList.length == _this.magacini.length) {
                _this.showDropdown = true;
                _this.dropdownList.push({ id: 999, itemName: 'Ukupno svi' });
            }
            _this.mservice.getAllRoba().subscribe(function (robs) {
                _this.roba = robs;
                _this.mservice.getAllLots().subscribe(function (lt) {
                    _this.lots = lt;
                });
            });
        });
    };
    LagerlistaComponent.prototype.onItemSelect = function (item) {
        this.selectedItems.push(item);
        console.log(this.selectedItems);
    };
    LagerlistaComponent.prototype.OnItemDeSelect = function (item) {
        this.selectedItems.splice(item, 1);
        console.log(this.selectedItems);
    };
    LagerlistaComponent.prototype.onSelectAll = function (items) {
        this.selectedItems.push(items);
        console.log(this.selectedItems);
    };
    LagerlistaComponent.prototype.onDeSelectAll = function (items) {
        this.selectedItems = [];
        console.log(this.selectedItems);
    };
    LagerlistaComponent.prototype.getLager = function () {
        var _this = this;
        this.vrednosti25 = [];
        this.pedeset = [];
        this.map = [];
        this.kcl = [];
        this.urea = [];
        this.gran = [];
        this.san = [];
        this.kan = [];
        this.amon = [];
        this.np = [];
        this.ureapril = [];
        this.svimagacinisvimarlepi = [];
        this.dap = [];
        this.npkFoksan = [];
        this.npk16168 = [];
        this.sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.showTable = true;
        this.obj4table = [];
        console.log("CONSOLE->");
        console.log(this.selectedItems);
        if (this.selectedItems[0].id == 999) {
            console.log('SVI');
            this.mservice.getAllLagers().subscribe(function (datz) {
                _this.lagers = datz;
                _this.mag = "Ukupno svi magacini";
                var dvapet = _this.lagers[0];
                _this.mag = dvapet.magacin;
                for (var key in dvapet.pakovanjaKolicine) {
                    var pp = {
                        value: (dvapet.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    console.log(dvapet.pakovanjaKolicine[key]);
                    _this.sum[0] += dvapet.pakovanjaKolicine[key];
                    _this.vrednosti25.push(pp); //npk16 kolona
                }
                _this.toShow[0] = (_this.sum[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var pedeset = _this.lagers[1];
                for (var key in pedeset.pakovanjaKolicine) {
                    var pp = {
                        value: (pedeset.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[1] += pedeset.pakovanjaKolicine[key];
                    _this.pedeset.push(pp);
                }
                _this.toShow[1] = (_this.sum[1]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var map = _this.lagers[2];
                for (var key in map.pakovanjaKolicine) {
                    var pp = {
                        value: (map.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[2] += map.pakovanjaKolicine[key];
                    _this.map.push(pp);
                }
                _this.toShow[2] = (_this.sum[2]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var kcl = _this.lagers[3];
                for (var key in kcl.pakovanjaKolicine) {
                    var pp = {
                        value: (kcl.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[3] += kcl.pakovanjaKolicine[key];
                    _this.kcl.push(pp);
                }
                _this.toShow[3] = (_this.sum[3]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var urea = _this.lagers[4];
                for (var key in urea.pakovanjaKolicine) {
                    var pp = {
                        value: (urea.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[4] += urea.pakovanjaKolicine[key];
                    _this.urea.push(pp);
                }
                _this.toShow[4] = (_this.sum[4]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var gran = _this.lagers[5];
                for (var key in gran.pakovanjaKolicine) {
                    var pp = {
                        value: (gran.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[5] += gran.pakovanjaKolicine[key];
                    _this.gran.push(pp);
                }
                _this.toShow[5] = (_this.sum[5]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var san = _this.lagers[6];
                for (var key in san.pakovanjaKolicine) {
                    var pp = {
                        value: (san.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[6] += san.pakovanjaKolicine[key];
                    _this.san.push(pp);
                }
                _this.toShow[6] = (_this.sum[6]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var kan = _this.lagers[7];
                for (var key in kan.pakovanjaKolicine) {
                    var pp = {
                        value: (kan.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[7] += kan.pakovanjaKolicine[key];
                    _this.kan.push(pp);
                }
                _this.toShow[7] = (_this.sum[7]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var amon = _this.lagers[8];
                for (var key in amon.pakovanjaKolicine) {
                    var pp = {
                        value: (amon.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[8] += amon.pakovanjaKolicine[key];
                    _this.amon.push(pp);
                }
                _this.toShow[8] = (_this.sum[8]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                /*
        for(let temp = 0; temp < this.lagers.length; temp++) {
          var roba = this.lagers[temp];
          for(var key in  roba.pakovanjaKolicine) {
        
              var pp = {
                value : (np.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package : key
              }
              this.sum[temp]  += roba.pakovanjaKolicine[key];
              this.np.push(pp);
            }
          }
        }
        */
                var np = _this.lagers[9];
                for (var key in np.pakovanjaKolicine) {
                    var pp = {
                        value: (np.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[9] += np.pakovanjaKolicine[key];
                    _this.np.push(pp);
                }
                _this.toShow[9] = (_this.sum[9]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                var ureapril = _this.lagers[10];
                if (ureapril != null) {
                    for (var key in ureapril.pakovanjaKolicine) {
                        var pp = {
                            value: (ureapril.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                            package: key
                        };
                        _this.sum[10] += ureapril.pakovanjaKolicine[key];
                        _this.ureapril.push(pp);
                    }
                }
                _this.toShow[10] = (_this.sum[10]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                var dap = _this.lagers[11];
                if (dap != null) {
                    for (var key in dap.pakovanjaKolicine) {
                        var pp = {
                            value: (dap.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                            package: key
                        };
                        _this.sum[11] += dap.pakovanjaKolicine[key];
                        _this.dap.push(pp);
                    }
                    _this.toShow[11] = (_this.sum[11]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                var npkFoksan = _this.lagers[12];
                if (npkFoksan != null) {
                    for (var key in npkFoksan.pakovanjaKolicine) {
                        var pp = {
                            value: (npkFoksan.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                            package: key
                        };
                        _this.sum[12] += npkFoksan.pakovanjaKolicine[key];
                        _this.npkFoksan.push(pp);
                    }
                    _this.toShow[12] = (_this.sum[12]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                var npk16168 = _this.lagers[13];
                if (npk16168 != null) {
                    for (var key in npk16168.pakovanjaKolicine) {
                        var pp = {
                            value: (npk16168.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                            package: key
                        };
                        _this.sum[13] += npk16168.pakovanjaKolicine[key];
                        _this.npk16168.push(pp);
                    }
                    _this.toShow[13] = (_this.sum[12]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                console.log(_this.sum);
            });
            this.detaljnoSvi = false;
        }
        else if (this.selectedItems.length == 1 &&
            this.selectedItems[0].length != this.magacini.length + 1) {
            this.mservice.getLager(this.selectedItems[0].id).subscribe(function (data) {
                _this.lagers = data;
                console.log(data);
                var dvapet = _this.lagers[0];
                _this.mag = dvapet.magacin;
                for (var key in dvapet.pakovanjaKolicine) {
                    var pp = {
                        value: (dvapet.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    console.log(dvapet.pakovanjaKolicine[key]);
                    _this.sum[0] += dvapet.pakovanjaKolicine[key];
                    _this.vrednosti25.push(pp); //npk16 kolona
                }
                var pedeset = _this.lagers[1];
                for (var key in pedeset.pakovanjaKolicine) {
                    var pp = {
                        value: (pedeset.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[1] += pedeset.pakovanjaKolicine[key];
                    _this.pedeset.push(pp);
                }
                /*
                amon = [];*/
                var map = _this.lagers[2];
                for (var key in map.pakovanjaKolicine) {
                    var pp = {
                        value: (map.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[2] += map.pakovanjaKolicine[key];
                    _this.map.push(pp);
                }
                var kcl = _this.lagers[3];
                for (var key in kcl.pakovanjaKolicine) {
                    var pp = {
                        value: (kcl.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[3] += kcl.pakovanjaKolicine[key];
                    _this.kcl.push(pp);
                }
                var urea = _this.lagers[4];
                for (var key in urea.pakovanjaKolicine) {
                    var pp = {
                        value: (urea.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[4] += urea.pakovanjaKolicine[key];
                    _this.urea.push(pp);
                }
                var gran = _this.lagers[5];
                for (var key in gran.pakovanjaKolicine) {
                    var pp = {
                        value: (gran.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[5] += gran.pakovanjaKolicine[key];
                    _this.gran.push(pp);
                }
                var san = _this.lagers[6];
                for (var key in san.pakovanjaKolicine) {
                    var pp = {
                        value: (san.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[6] += san.pakovanjaKolicine[key];
                    _this.san.push(pp);
                }
                var kan = _this.lagers[7];
                for (var key in kan.pakovanjaKolicine) {
                    var pp = {
                        value: (kan.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[7] += kan.pakovanjaKolicine[key];
                    _this.kan.push(pp);
                }
                var amon = _this.lagers[8];
                for (var key in amon.pakovanjaKolicine) {
                    var pp = {
                        value: (amon.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[8] += amon.pakovanjaKolicine[key];
                    _this.amon.push(pp);
                }
                var np = _this.lagers[9];
                for (var key in np.pakovanjaKolicine) {
                    var pp = {
                        value: (np.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[9] += np.pakovanjaKolicine[key];
                    _this.np.push(pp);
                }
                var ureapril = _this.lagers[10];
                for (var key in ureapril.pakovanjaKolicine) {
                    var pp = {
                        value: (ureapril.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[10] += ureapril.pakovanjaKolicine[key];
                    _this.ureapril.push(pp);
                }
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.toShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                var dap = _this.lagers[11];
                for (var key in dap.pakovanjaKolicine) {
                    var pp = {
                        value: (dap.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[11] += dap.pakovanjaKolicine[key];
                    _this.dap.push(pp);
                }
                _this.toShow[11] = (_this.sum[11]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                var npkFoksan = _this.lagers[12];
                for (var key in npkFoksan.pakovanjaKolicine) {
                    var pp = {
                        value: (npkFoksan.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[12] += npkFoksan.pakovanjaKolicine[key];
                    _this.npkFoksan.push(pp);
                }
                _this.toShow[12] = (_this.sum[12]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                var npk16168 = _this.lagers[13];
                for (var key in npk16168.pakovanjaKolicine) {
                    var pp = {
                        value: (npk16168.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                        package: key
                    };
                    _this.sum[13] += npk16168.pakovanjaKolicine[key];
                    _this.npk16168.push(pp);
                }
                _this.toShow[13] = (_this.sum[13]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                for (var b = 0; b < _this.sum.length; b++) {
                    _this.sum[b] = +_this.sum[b].toFixed(2);
                    _this.tableShow[b] = (_this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
                console.log(npk16168);
                _this.detaljnoSvi = false;
                console.log(_this.sum);
            });
        }
        else if (this.selectedItems.length > 1) {
            console.log('svi detaljno');
            var niz2send = [];
            this.selectedItems.forEach(function (nnn) {
                if (nnn.id != 999) {
                    niz2send.push({ item_id: nnn.id, item_text: nnn.itemName });
                }
            });
            this.mservice.getLagerSviDetaljno(niz2send).subscribe(function (data) {
                var e_1, _a;
                //this.lagers = data;
                _this.detaljnoSvi = true;
                _this.svimagacinisvimarlepi = [];
                _this.showTable = true;
                _this.showTable = false;
                _this.magacinNSP6 = [];
                _this.magacinNSR3 = [];
                _this.magacinVRK2 = [];
                _this.magacinPAP10 = [];
                _this.magacinSKDMT = [];
                _this.magacinNSUS = [];
                _this.magacinPAUS = [];
                try {
                    for (var data_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var marlep = data_1_1.value;
                        if (marlep.magacin == "Novi Sad, Privrednikova 6") {
                            _this.magacinNSP6.push(marlep);
                        }
                        if (marlep.magacin == "Novi Sad, Ribarska 3") {
                            _this.magacinNSR3.push(marlep);
                        }
                        if (marlep.magacin == "Vrbas, Kulski put 2") {
                            _this.magacinVRK2.push(marlep);
                        }
                        if (marlep.magacin == "Pančevo, Prvomajska 10") {
                            _this.magacinPAP10.push(marlep);
                        }
                        if (marlep.magacin == "Sremski Karlovci, Donji Matej bb") {
                            _this.magacinSKDMT.push(marlep);
                        }
                        if (marlep.magacin == "Novi Sad, Uslužni magacin") {
                            _this.magacinNSUS.push(marlep);
                        }
                        if (marlep.magacin == "Pančevo, Uslužni magacin") {
                            _this.magacinPAUS.push(marlep);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (_this.magacinSKDMT.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinSKDMT);
                }
                if (_this.magacinNSUS.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinNSUS);
                }
                if (_this.magacinNSR3.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinNSR3);
                }
                if (_this.magacinPAP10.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinPAP10);
                }
                if (_this.magacinVRK2.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinVRK2);
                }
                if (_this.magacinPAUS.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinPAUS);
                }
                if (_this.magacinNSP6.length != 0) {
                    _this.svimagacinisvimarlepi.push(_this.magacinNSP6);
                }
                console.log(_this.svimagacinisvimarlepi);
                /*
              for(let magikarp of this.svimagacinisvimarlepi) {
                
                  magikarp.vrednosti25 = [];
                
                var dvapet = magikarp;
                this.mag = dvapet.magacin;
                for(var key in dvapet.pakovanjaKolicine) {
                  var pp = {
                    value : (dvapet.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  console.log(dvapet.pakovanjaKolicine[key])
                  this.sum[0] += dvapet.pakovanjaKolicine[key];
                  
                  magikarp.vrednosti25.push(pp) //npk16 kolona
                }
                this.toShow[0] = (this.sum[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
                var pedeset = this.lagers[1];
                for(var key in pedeset.pakovanjaKolicine) {
                  var pp = {
                    value : (pedeset.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[1] += pedeset.pakovanjaKolicine[key];
                  this.pedeset.push(pp)
                }
                this.toShow[1] = (this.sum[1]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                /*
        
                amon = [];
                
                var  map = this.lagers[2];
                for(var key in map.pakovanjaKolicine) {
                  var pp = {
                    value : (map.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[2] += map.pakovanjaKolicine[key];
                  this.map.push(pp)
                }
                this.toShow[2] = (this.sum[2]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
                var  kcl = this.lagers[3];
                for(var key in kcl.pakovanjaKolicine) {
                  var pp = {
                    value : (kcl.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[3] += kcl.pakovanjaKolicine[key];
                  this.kcl.push(pp)
                }
                this.toShow[3] = (this.sum[3]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
                var  urea = this.lagers[4];
                for(var key in urea.pakovanjaKolicine) {
                  var pp = {
                    value : (urea.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[4] += urea.pakovanjaKolicine[key];
                  this.urea.push(pp)
                }
                this.toShow[4] = (this.sum[4]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
                
                var  gran = this.lagers[5];
                for(var key in gran.pakovanjaKolicine) {
                  var pp = {
                    value : (gran.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[5] += gran.pakovanjaKolicine[key];
                  this.gran.push(pp)
                }
                this.toShow[5] = (this.sum[5]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    
                var  san = this.lagers[6];
                for(var key in san.pakovanjaKolicine) {
                  var pp = {
                    value : (san.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[6] += san.pakovanjaKolicine[key];
                  this.san.push(pp)
                }
                this.toShow[6] = (this.sum[6]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
        
                var  kan = this.lagers[7];
                for(var key in kan.pakovanjaKolicine) {
                  var pp = {
                    value : (kan.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[7] += kan.pakovanjaKolicine[key];
                  this.kan.push(pp)
                }
                this.toShow[7] = (this.sum[7]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
                var  amon = this.lagers[8];
                for(var key in amon.pakovanjaKolicine) {
                  var pp = {
                    value : (amon.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[8] += amon.pakovanjaKolicine[key];
                  this.amon.push(pp)
                }
                this.toShow[8] = (this.sum[8]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
        
                var np = this.lagers[9];
                for(var key in np.pakovanjaKolicine) {
                  var pp = {
                    value : (np.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[9] += np.pakovanjaKolicine[key];
                  this.np.push(pp)
                }
                this.toShow[9] = (this.sum[9]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
                var ureapril = this.lagers[10];
                for(var key in ureapril.pakovanjaKolicine) {
                  var pp = {
                    value : (ureapril.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[10] += ureapril.pakovanjaKolicine[key];
                  this.ureapril.push(pp)
                }
                this.toShow[10] = (this.sum[10]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                for(let b = 0; b < this.sum.length; b++) {
                  this.sum[b] = +this.sum[b].toFixed(2);
                  this.tableShow[b] = (this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
        
                var dap = this.lagers[11];
                for(var key in dap.pakovanjaKolicine) {
                  var pp = {
                    value : (dap.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                    package : key
                  }
                  this.sum[11] += dap.pakovanjaKolicine[key];
                  this.dap.push(pp)
                }
                this.toShow[11] = (this.sum[11]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                for(let b = 0; b < this.sum.length; b++) {
                  this.sum[b] = +this.sum[b].toFixed(2);
                  this.tableShow[b] = (this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }
              console.log(this.sum);
           
            }
            
                console.log(this.svimagacinisvimarlepi)
              });
        
            }
        */
                _this.sum.forEach(function (s) {
                    (s).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                });
            });
        }
    };
    LagerlistaComponent.prototype.printLager = function () {
        var e_2, _a, e_3, _b;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__({ orientation: 'landscape', format: 'tabloid' });
        doc.setFont('times', 'bold');
        doc.setFontSize(15);
        var nemajuRobe = [];
        var value = '';
        var drugi = true;
        var ostatakY;
        if (this.detaljnoSvi) {
            value = '#detaljnijeSVI';
            doc.text('Datum ' + new Date().toLocaleDateString(), 6, 8);
            try {
                //doc.text("Detaljno svi magacini", 10, 15);
                for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.svimagacinisvimarlepi), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var magk = _d.value;
                    var sumica = 0;
                    for (var i = 0; i < magk.length; i++) {
                        for (var key in magk[i].pakovanjaKolicine) {
                            var pp = {
                                value: (magk[i].pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                                package: key
                            };
                            sumica += magk[i].pakovanjaKolicine[key];
                        }
                    }
                    if (sumica == 0) {
                        nemajuRobe.push(magk);
                        continue;
                    }
                    var res = doc.autoTableHtmlToJson(document.getElementById(magk[0].magacin));
                    if (res != null) {
                        var startY = drugi ? 15 : doc.lastAutoTable.finalY + 5;
                        ostatakY = startY;
                        var customSize = 13;
                        var customColumWith = 32;
                        var headline = this.clearText(magk[0].magacin);
                        doc.text(headline, 6, ++startY);
                        doc.autoTable(res.columns, res.data, {
                            startY: ++startY,
                            theme: "grid",
                            tableWidth: 'auto',
                            margin: { top: 6, left: 6, right: 6, bottom: 6 },
                            valign: 'middle', halign: 'center',
                            cellPadding: 0,
                            styles: { overflow: 'linebreak', cellWidth: customColumWith, fontSize: customSize, cellPadding: 0 },
                        });
                        drugi = false;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var y = doc.lastAutoTable.finalY + 10;
            if (nemajuRobe.length != 0) {
                doc.text("Magacini koji nemaju robe: ", 6, y);
                y = y + 10;
                try {
                    for (var nemajuRobe_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](nemajuRobe), nemajuRobe_1_1 = nemajuRobe_1.next(); !nemajuRobe_1_1.done; nemajuRobe_1_1 = nemajuRobe_1.next()) {
                        var nema = nemajuRobe_1_1.value;
                        nema[0].magacin = nema[0].magacin.replace("č", "c");
                        nema[0].magacin = nema[0].magacin.replace("ž", "z");
                        nema[0].magacin = nema[0].magacin.replace("ć", "c");
                        doc.text("-" + nema[0].magacin, 6, y);
                        y = y + 10;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (nemajuRobe_1_1 && !nemajuRobe_1_1.done && (_b = nemajuRobe_1.return)) _b.call(nemajuRobe_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            doc.save("Lager-pojedinacno-" + new Date().toLocaleDateString() + ".pdf");
        }
        else {
            value = '#tableid';
            var elementOption = document.getElementById("elementOption");
            var ttext = this.clearText(this.mag);
            if (ttext == '' || ttext == undefined || ttext == null) {
                ttext = 'SVI';
                doc.text("Magacin - " + ttext + ', Datum ' + new Date().toLocaleDateString(), 10, 10);
                doc.autoTable({ html: value,
                    startY: 20,
                    theme: "grid",
                    valign: 'middle', halign: 'center',
                    cellPadding: 0,
                    margin: { top: 6, left: 6, right: 6, bottom: 6 },
                    tableWidth: 'auto',
                    styles: { overflow: 'linebreak', cellWidth: 32, halign: 'center', fontSize: 15, cellPadding: 3 },
                });
                doc.save("Lager-" + this.mag + "-" + new Date().toLocaleDateString() + ".pdf");
                return;
            }
            doc.text("Magacin - " + ttext + ', Datum ' + new Date().toLocaleDateString(), 10, 10);
            doc.autoTable({ html: value,
                startY: 20,
                theme: "grid",
                styles: { overflow: 'linebreak', columnWidth: 'auto', halign: 'left' },
                minCellWidth: '18'
                /*
                columnStyles: {
                  0: {cellWidth: 18},
                  1: {cellWidth: 18},
                  2: {cellWidth: 18},
                  3: {cellWidth: 18},
                  4: {cellWidth: 18},
                  5: {cellWidth: 18},
                  6: {cellWidth: 18},
                  7: {cellWidth: 18},
                  8: {cellWidth: 18},
                  9: {cellWidth: 18},
                  10: {cellWidth: 18},
                  11: {cellWidth: 18}}
                */ 
            });
            doc.save("Lager-" + this.mag + "-" + new Date().toLocaleDateString() + ".pdf");
        }
        // console.clear();
    };
    LagerlistaComponent.prototype.clearText = function (inp) {
        var wrong = 'čćšđž';
        var right = 'ccsdz';
        var re = new RegExp('[' + wrong + ']', 'ig');
        return inp.replace(re, function (m) { return right.charAt(wrong.indexOf(m)); });
    };
    LagerlistaComponent.prototype.onChange = function (value) {
    };
    LagerlistaComponent.prototype.azuriranje = function () {
        var _this = this;
        if (this.novakolicina.value == "" || this.djubrivo_form.value == ""
            || this.lot_form.value == "" || this.pakovanje_form.value == null || this.pakovanje_form.value == "") {
            alert("Popunite sva potrebna polja.");
            return;
        }
        else {
            this.mservice.azurirajstanje({
                "id": this.trenutna.id,
                "novostanje": this.novakolicina.value
            }).subscribe(function (data) {
                alert("Promenjeno stanje.");
                _this.clearForms();
                window.location.reload();
            });
        }
    };
    LagerlistaComponent.prototype.clearForms = function () {
        this.novakolicina.setValue("");
        this.djubrivo_form.setValue("");
        this.lot_form.setValue("");
        this.pakovanje_form.setValue("");
    };
    LagerlistaComponent.prototype.pakovanjeChange = function (event) {
        var _this = this;
        if (this.djubrivo_form.value == "" || this.lot_form.value == "" || this.pakovanje_form.value == null || this.pakovanje_form.value == "") {
            this.stanjemessage = true;
            return;
        }
        else {
            this.mservice.getstanje({
                "magacinId": this.magacinizmena_form.value,
                "robaId": this.djubrivo_form.value,
                "lotId": this.lot_form.value,
                "pakovanjeId": this.pakovanje_form.value
            }).subscribe(function (data) {
                _this.trenutna = data;
                _this.trenutna.novostanje = (_this.trenutna.novostanje).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            });
        }
    };
    LagerlistaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_5__["MagacinService"] }
    ]; };
    LagerlistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lagerlista',
            template: __webpack_require__(/*! raw-loader!./lagerlista.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/lagerlista/lagerlista.component.html"),
            styles: [__webpack_require__(/*! ./lagerlista.component.css */ "./src/app/view/lagerlista/lagerlista.component.css")]
        })
    ], LagerlistaComponent);
    return LagerlistaComponent;
}());



/***/ }),

/***/ "./src/app/view/lagerrepro/lagerrepro.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/lagerrepro/lagerrepro.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbGFnZXJyZXByby9sYWdlcnJlcHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/lagerrepro/lagerrepro.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/lagerrepro/lagerrepro.component.ts ***!
  \*********************************************************/
/*! exports provided: LagerreproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LagerreproComponent", function() { return LagerreproComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);






var LagerreproComponent = /** @class */ (function () {
    function LagerreproComponent(router, mservice) {
        this.router = router;
        this.mservice = mservice;
        this.crevas = [];
        this.showTable = false;
        this.izmenacreva = false;
        this.izmenadzaka = false;
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.dzak_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.novakolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.magacinizmena_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.paletaform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.izmenastreca = false;
        this.nazividzakova = [];
        this.stanjadzakova = [];
        this.nazivipaleta = [];
        this.stanjapaleta = [];
        this.customcols = [];
        this.nazivimaterijala = [];
        this.stanjamaterijala = [];
        this.show100 = [];
        this.crevoform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.izborni = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.izmenapalete = false;
        this.show120 = [];
        this.vrednostiza100 = [];
        this.vrednostiza120 = [];
    }
    LagerreproComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
            _this.mservice.getAllRoba().subscribe(function (robs) {
                _this.roba = robs;
                _this.mservice.getAllLots().subscribe(function (lt) {
                    _this.lots = lt;
                });
            });
        });
    };
    LagerreproComponent.prototype.getLager = function () {
        var _this = this;
        this.vrednostiza100 = [];
        this.vrednostiza120 = [];
        this.customcols = [];
        this.show100 = [];
        this.show120 = [];
        this.showTable = true;
        this.nazivipaleta = [];
        this.stanjadzakova = [];
        this.nazividzakova = [];
        this.stanjapaleta = [];
        this.mservice.getAllRoba().subscribe(function (dataa) {
            _this.robs = dataa;
            _this.robs = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](_this.robs, 'naziv');
        });
        this.mservice.getLagerRepro(this.magacin_form.value).subscribe(function (data) {
            _this.bb = data;
            console.table(_this.bb);
            var hash0 = _this.bb[0];
            var hash1 = _this.bb[1];
            console.log(hash1);
            //if(bb[0].crevo == "") {
            var hh = hash0.pasadzStanja;
            for (var key in hh) {
                console.log(key + ': ' + hh[key]);
                if (key == '25/1' || key == '50/1' || key == '500/1' ||
                    key == '600/1' || key == '1000/1') {
                    _this.nazividzakova.push(key);
                    _this.stanjadzakova.push(hh[key]);
                }
                else if (key == '120*100' || key == '115*95') {
                    _this.nazivipaleta.push(key);
                    _this.stanjapaleta.push(hh[key]);
                }
                else {
                    _this.s = key;
                    _this.ss = hh[key];
                }
                //this.nazivimaterijala.push(key);
                // this.stanjamaterijala.push(hh[key]);
            }
            //  } else {
            var c1 = hash1.robeStanja;
            for (var key in c1) {
                _this.customcols.push(key);
                console.log('a' + key + ': ' + c1[key]);
                _this.vrednostiza100.push(c1[key]);
                _this.show100.push((c1[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
            }
            var hash2 = _this.bb[2];
            var c2 = hash2.robeStanja;
            for (var key in c2) {
                console.log(key + ': ' + c2[key]);
                _this.vrednostiza120.push(c2[key]);
                _this.show120.push((c2[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
            }
        });
    };
    LagerreproComponent.prototype.clearForms = function () {
        this.novakolicina.setValue("");
        this.djubrivo_form.setValue("");
        this.magacinizmena_form.setValue("");
        this.izborni.setValue("0");
        this.paletaform.setValue("");
        this.dzak_form.setValue("");
        this.lot_form.setValue("");
        this.pakovanje_form.setValue("");
    };
    LagerreproComponent.prototype.izbor = function (value) {
        this.localizbor = value;
        if (value == 1) {
            this.izmenacreva = true;
            this.izmenapalete = false;
            this.izmenadzaka = false;
            this.izmenastreca = false;
        }
        else if (value == 2) {
            this.izmenapalete = true;
            this.izmenacreva = false;
            this.izmenadzaka = false;
            this.izmenastreca = false;
        }
        else if (value == 3) {
            this.izmenacreva = false;
            this.izmenapalete = false;
            this.izmenadzaka = true;
            this.izmenastreca = false;
        }
        else if (value == 4) {
            this.izmenacreva = false;
            this.izmenapalete = false;
            this.izmenadzaka = false;
            this.izmenastreca = true;
        }
    };
    LagerreproComponent.prototype.azuriranje = function () {
        var obj2update = {};
        obj2update.magacinId = this.magacinizmena_form.value;
        if (this.localizbor == 1) {
            obj2update.crevoId = this.crevoform.value;
            obj2update.robaId = this.djubrivo_form.value;
            obj2update.novostanje = this.novakolicina.value;
            this.mservice.azuriranjecrevo(obj2update).subscribe(function (data) {
                alert("Updated");
                obj2update = new Object();
                window.location.reload();
            });
        }
        else if (this.localizbor == 2) {
            obj2update.paletaId = this.paletaform.value;
            obj2update.novostanje = this.novakolicina.value;
            this.mservice.azuriranjepalete(obj2update).subscribe(function (data) {
                alert("Updated");
                obj2update = new Object();
                window.location.reload();
            });
        }
        else if (this.localizbor == 3) {
            obj2update.paletaId = this.dzak_form.value;
            obj2update.novostanje = this.novakolicina.value;
            this.mservice.azuriranjepalete(obj2update).subscribe(function (data) {
                alert("Updated");
                obj2update = new Object();
                window.location.reload();
            });
        }
        else if (this.localizbor == 4) {
            obj2update.paletaId = 3;
            obj2update.novostanje = this.novakolicina.value;
            this.mservice.azuriranjepalete(obj2update).subscribe(function (data) {
                alert("Updated");
                obj2update = new Object();
                window.location.reload();
            });
        }
    };
    LagerreproComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__["MagacinService"] }
    ]; };
    LagerreproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lagerrepro',
            template: __webpack_require__(/*! raw-loader!./lagerrepro.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/lagerrepro/lagerrepro.component.html"),
            styles: [__webpack_require__(/*! ./lagerrepro.component.css */ "./src/app/view/lagerrepro/lagerrepro.component.css")]
        })
    ], LagerreproComponent);
    return LagerreproComponent;
}());



/***/ }),

/***/ "./src/app/view/lagertabela/lagertabela.component.css":
/*!************************************************************!*\
  !*** ./src/app/view/lagertabela/lagertabela.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbGFnZXJ0YWJlbGEvbGFnZXJ0YWJlbGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/lagertabela/lagertabela.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/lagertabela/lagertabela.component.ts ***!
  \***********************************************************/
/*! exports provided: LagertabelaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LagertabelaComponent", function() { return LagertabelaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LagertabelaComponent = /** @class */ (function () {
    function LagertabelaComponent() {
        this.pedeset = [];
        this.kcl = [];
        this.urea = [];
        this.gran = [];
        this.san = [];
        this.kan = [];
        this.amon = [];
        this.map = [];
        this.np = [];
        this.ureapril = [];
        this.dap = [];
        this.sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.vrednosti25 = [];
        this.toShow = [];
        this.tableShow = [];
    }
    LagertabelaComponent.prototype.ngOnInit = function () {
        console.log(this.themagacin);
        this.vrednosti25 = [];
        this.pedeset = [];
        this.map = [];
        this.kcl = [];
        this.urea = [];
        this.gran = [];
        this.san = [];
        this.kan = [];
        this.amon = [];
        this.np = [];
        this.ureapril = [];
        this.dap = [];
        this.sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.obj4table = [];
        this.lagers = this.themagacin;
        var dvapet = this.lagers[0];
        this.mag = dvapet.magacin;
        for (var key in dvapet.pakovanjaKolicine) {
            var pp = {
                value: (dvapet.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            console.log(dvapet.pakovanjaKolicine[key]);
            this.sum[0] += dvapet.pakovanjaKolicine[key];
            this.vrednosti25.push(pp); //npk16 kolona
        }
        var pedeset = this.lagers[1];
        for (var key in pedeset.pakovanjaKolicine) {
            var pp = {
                value: (pedeset.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[1] += pedeset.pakovanjaKolicine[key];
            this.pedeset.push(pp);
        }
        /*
        amon = [];*/
        var map = this.lagers[2];
        for (var key in map.pakovanjaKolicine) {
            var pp = {
                value: (map.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[2] += map.pakovanjaKolicine[key];
            this.map.push(pp);
        }
        var kcl = this.lagers[3];
        for (var key in kcl.pakovanjaKolicine) {
            var pp = {
                value: (kcl.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[3] += kcl.pakovanjaKolicine[key];
            this.kcl.push(pp);
        }
        var urea = this.lagers[4];
        for (var key in urea.pakovanjaKolicine) {
            var pp = {
                value: (urea.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[4] += urea.pakovanjaKolicine[key];
            this.urea.push(pp);
        }
        var gran = this.lagers[5];
        for (var key in gran.pakovanjaKolicine) {
            var pp = {
                value: (gran.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[5] += gran.pakovanjaKolicine[key];
            this.gran.push(pp);
        }
        var san = this.lagers[6];
        for (var key in san.pakovanjaKolicine) {
            var pp = {
                value: (san.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[6] += san.pakovanjaKolicine[key];
            this.san.push(pp);
        }
        var kan = this.lagers[7];
        for (var key in kan.pakovanjaKolicine) {
            var pp = {
                value: (kan.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[7] += kan.pakovanjaKolicine[key];
            this.kan.push(pp);
        }
        var amon = this.lagers[8];
        for (var key in amon.pakovanjaKolicine) {
            var pp = {
                value: (amon.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[8] += amon.pakovanjaKolicine[key];
            this.amon.push(pp);
        }
        var np = this.lagers[9];
        for (var key in np.pakovanjaKolicine) {
            var pp = {
                value: (np.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[9] += np.pakovanjaKolicine[key];
            this.np.push(pp);
        }
        var ureapril = this.lagers[10];
        for (var key in ureapril.pakovanjaKolicine) {
            var pp = {
                value: (ureapril.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[10] += ureapril.pakovanjaKolicine[key];
            this.ureapril.push(pp);
        }
        for (var b = 0; b < this.sum.length; b++) {
            this.sum[b] = +this.sum[b].toFixed(2);
            this.toShow[b] = (this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            this.tableShow[b] = (this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        var dap = this.lagers[11];
        for (var key in dap.pakovanjaKolicine) {
            var pp = {
                value: (dap.pakovanjaKolicine[key]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                package: key
            };
            this.sum[11] += dap.pakovanjaKolicine[key];
            this.dap.push(pp);
        }
        this.toShow[11] = (this.sum[11]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        for (var b = 0; b < this.sum.length; b++) {
            this.sum[b] = +this.sum[b].toFixed(2);
            this.tableShow[b] = (this.sum[b]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        console.log(this.sum);
        var summica = 0;
        this.sum.forEach(function (s) {
            summica += s;
        });
        if (summica == 0) {
            this.themagacin = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LagertabelaComponent.prototype, "themagacin", void 0);
    LagertabelaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lagertabela',
            template: __webpack_require__(/*! raw-loader!./lagertabela.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/lagertabela/lagertabela.component.html"),
            styles: [__webpack_require__(/*! ./lagertabela.component.css */ "./src/app/view/lagertabela/lagertabela.component.css")]
        })
    ], LagertabelaComponent);
    return LagertabelaComponent;
}());



/***/ }),

/***/ "./src/app/view/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/view/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUVFLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC92aWV3L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/view/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_forms_login_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/forms/login-info */ "./src/app/auth/forms/login-info.ts");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "./src/app/auth/service/auth.service.ts");
/* harmony import */ var src_app_auth_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/token-storage/token-storage.service */ "./src/app/auth/token-storage/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(aservice, authService, tokenStorage, router) {
        this.aservice = aservice;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.wrong = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginBtn = function () {
        var _this = this;
        if (this.email.value == "") {
            alert("Unesite username");
            return;
        }
        if (this.password.value == "") {
            alert("Unesite password");
            return;
        }
        this.wrong = false;
        var loginForm = new src_app_auth_forms_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"](this.email.value, this.password.value);
        this.aservice.attemptAuth(loginForm).subscribe(function (data) {
            console.log(data);
            _this.jwtauth = data;
            _this.tokenStorage.saveToken(data.accessToken);
            _this.router.navigate(['/početna']);
        }, function (error) {
            _this.wrong = true;
            return;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_auth_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/view/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/view/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "./src/app/auth/service/auth.service.ts");
/* harmony import */ var src_app_auth_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/token-storage/token-storage.service */ "./src/app/auth/token-storage/token-storage.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, aservice, tokenS) {
        this.router = router;
        this.aservice = aservice;
        this.tokenS = tokenS;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aservice.getLogged().subscribe(function (data) {
            if (data == null) {
                _this.router.navigate(['/prijava']);
                return;
            }
            _this.user = data;
        });
    };
    NavbarComponent.prototype.navigateHome = function () {
        this.router.navigate(['početna']);
    };
    NavbarComponent.prototype.navigateDjubrivo = function () {
        this.router.navigate(['djubrivo']);
    };
    NavbarComponent.prototype.navigateParse = function () {
        this.router.navigate(['parse']);
    };
    NavbarComponent.prototype.navigateReport = function () {
        this.router.navigate(['izveštaj']);
    };
    NavbarComponent.prototype.navigateNewRepro = function () {
        this.router.navigate(['repro']);
    };
    NavbarComponent.prototype.navigateLager = function () {
        this.router.navigate(['lager']);
    };
    NavbarComponent.prototype.navigatePakovanje = function () {
        this.router.navigate(['pakovanje']);
    };
    NavbarComponent.prototype.navigateLagerR = function () {
        this.router.navigate(['lagerrp']);
    };
    NavbarComponent.prototype.navigateDetalj = function () {
        this.router.navigate(['detalj']);
    };
    NavbarComponent.prototype.navigateReportRepro = function () {
        this.router.navigate(['izveštaj/repro']);
    };
    NavbarComponent.prototype.navigatePassword = function () {
        this.router.navigate(['lozinka']);
    };
    NavbarComponent.prototype.logout = function () {
        this.tokenS.signOut();
        this.router.navigate(['login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_auth_token_storage_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/view/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/view/newrepro/newrepro.component.css":
/*!******************************************************!*\
  !*** ./src/app/view/newrepro/newrepro.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbmV3cmVwcm8vbmV3cmVwcm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/newrepro/newrepro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/newrepro/newrepro.component.ts ***!
  \*****************************************************/
/*! exports provided: NewreproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewreproComponent", function() { return NewreproComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");





var NewreproComponent = /** @class */ (function () {
    function NewreproComponent(router, mservice) {
        this.router = router;
        this.mservice = mservice;
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.materijal_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.odabranaRoba = false;
        this.paletica_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.magacin_prenos_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.showPaleta = false;
        this.unetMagacin = false;
        this.unetMagacinPrenos = false;
        this.showPeCrevo = false;
        this.showKolicinaPaleta = false;
        this.strec = false;
        this.dzak = false;
        this.operacija_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.showDjubrivo = false;
    }
    NewreproComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.magacin_prenos_form.setValue("0");
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
            _this.mservice.getAllRoba().subscribe(function (robs) {
                _this.roba = robs;
                _this.mservice.getAllMaterijali().subscribe(function (mats) {
                    _this.materijali = mats;
                });
            });
        });
        console.clear();
    };
    NewreproComponent.prototype.dzakChange = function (event) {
        if (event != "0") {
            this.showKolicinaPaleta = true;
        }
        else {
            this.showKolicinaPaleta = false;
        }
    };
    NewreproComponent.prototype.magacinChange = function (event) {
        if (event != "0") {
            this.unetMagacin = true;
        }
        else {
            this.unetMagacin = false;
        }
    };
    NewreproComponent.prototype.magacinPrenosChange = function (event) {
        if (event != "0") {
            this.unetMagacinPrenos = true;
            this.operacija_form.setValue("prenos");
        }
        else {
            this.unetMagacinPrenos = false;
            this.operacija_form.setValue("plus");
        }
    };
    NewreproComponent.prototype.vrstaChange = function (event) {
        if (event == "1") {
            this.paletica_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.djubrivo_form.setValue("0");
            this.dzak = false;
            this.showPaleta = true;
            this.showPeCrevo = false;
            this.showKolicinaPaleta = false;
        }
        else if (event == "2") {
            this.paletica_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.showPeCrevo = true;
            this.showPaleta = false;
            this.dzak = false;
            this.showKolicinaPaleta = false;
        }
        else if (event == "3") {
            this.paletica_form.setValue("3");
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.djubrivo_form.setValue("0");
            this.strec = true;
            this.dzak = false;
            this.showPeCrevo = false;
            this.showKolicinaPaleta = true;
            this.showPaleta = false;
            this.showDjubrivo = false;
        }
        else if (event == "4") {
            this.paletica_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
            this.djubrivo_form.setValue("0");
            this.dzak = true;
            this.showPeCrevo = false;
            this.showKolicinaPaleta = false;
            this.showPaleta = false;
            this.strec = false;
            this.showDjubrivo = false;
        }
        else {
            this.showKolicinaPaleta = false;
            this.showPaleta = false;
            this.showDjubrivo = false;
            this.dzak = false;
            this.showPeCrevo = false;
            this.strec = false;
        }
    };
    NewreproComponent.prototype.crevoChange = function (event) {
        if (event != "0") {
            this.showKolicinaPaleta = true;
            this.showDjubrivo = true;
            this.dzak = false;
        }
        else {
            this.showKolicinaPaleta = false;
        }
    };
    NewreproComponent.prototype.paletaChange = function (event) {
        if (event != "0") {
            this.showKolicinaPaleta = true;
        }
        else {
            this.showKolicinaPaleta = false;
        }
        this.showDjubrivo = false;
    };
    NewreproComponent.prototype.onChange = function (event) {
        console.log(event);
        if (event != '0') {
            this.odabranaRoba = true;
        }
        else {
            this.odabranaRoba = false;
        }
    };
    NewreproComponent.prototype.unesiRepro = function () {
        var obj2send = {
            "magacinId": this.magacin_form.value,
            "magacinPrenosId": this.magacin_prenos_form.value,
            "operacija": this.operacija_form.value,
            "robaId": this.djubrivo_form.value,
            "materijalId": this.paletica_form.value,
            "kolicina": this.kolicina.value
        };
        console.table(obj2send);
        this.mservice.unesiRepro(obj2send).subscribe(function (data) {
            alert("Uspesno unet repro materijal");
        });
    };
    NewreproComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_4__["MagacinService"] }
    ]; };
    NewreproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newrepro',
            template: __webpack_require__(/*! raw-loader!./newrepro.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/newrepro/newrepro.component.html"),
            styles: [__webpack_require__(/*! ./newrepro.component.css */ "./src/app/view/newrepro/newrepro.component.css")]
        })
    ], NewreproComponent);
    return NewreproComponent;
}());



/***/ }),

/***/ "./src/app/view/pakovanje/pakovanje.component.css":
/*!********************************************************!*\
  !*** ./src/app/view/pakovanje/pakovanje.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcGFrb3ZhbmplL3Bha292YW5qZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/pakovanje/pakovanje.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/pakovanje/pakovanje.component.ts ***!
  \*******************************************************/
/*! exports provided: PakovanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PakovanjeComponent", function() { return PakovanjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PakovanjeComponent = /** @class */ (function () {
    function PakovanjeComponent(router, mservice) {
        this.router = router;
        this.mservice = mservice;
        this.showcrevo = false;
        this.showlot = false;
        this.crevo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.izvor_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.showdjubrivo = false;
        this.showPakovanje = false;
        this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.datum = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.showKolicina = false;
        this.showbtn = false;
    }
    PakovanjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
            _this.mservice.getAllRoba().subscribe(function (robs) {
                _this.roba = robs;
                _this.mservice.getAllLots().subscribe(function (lott) {
                    _this.lots = lott;
                });
            });
        });
        console.clear();
    };
    PakovanjeComponent.prototype.izvorChange = function (event) {
        console.log(event);
        if (event != '0') {
            console.log("usa");
            this.showPakovanje = true;
            //this.showcrevo = true;
        }
        else {
            // this.showcrevo = false;
            this.showPakovanje = false;
            this.showbtn = false;
            this.showcrevo = false;
            this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        }
    };
    PakovanjeComponent.prototype.changedLot = function (event) {
        if (event != '0') {
            this.showKolicina = true;
        }
        else {
            this.showKolicina = false;
            this.showPakovanje = false;
            this.showcrevo = false;
            this.showbtn = false;
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.izvor_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        }
    };
    PakovanjeComponent.prototype.zapakuj = function () {
        if (this.kolicina.value == "" || this.datum.value == "") {
            alert("Niste uneli kolicinu ili datum.");
            return;
        }
        var boj2send = {
            "magacinId": this.magacin_form.value,
            "lotId": this.lot_form.value,
            "izvorId": this.izvor_form.value,
            "robaId": this.djubrivo_form.value,
            "crevoId": this.crevo_form.value,
            "pakovanjeId": this.pakovanje_form.value,
            "kolicina": this.kolicina.value,
            "datum": this.datum.value
        };
        if (boj2send.pakovanjeId == 1) {
            if (boj2send.robaId == 5 || boj2send.robaId == 7 || boj2send.robaId == 8) { //1.25 SAN, KAN, UREA
                if (boj2send.kolicina % 1.25 != 0) {
                    alert("Kolicina odabrane robe mora biti deljiva sa 1.25");
                    return;
                }
            }
            else {
                if (boj2send.kolicina % 1.5 != 0) {
                    alert("Kolicina odabrane robe mora biti deljiva sa 1.5");
                    return;
                }
            }
        }
        else if (boj2send.pakovanjeId == 2) {
            var number = (boj2send.kolicina * 1000) / 50;
            var fixed = number.toFixed(6);
            var real = +fixed % 1;
            if (real != 0) {
                alert("Mora biti deljivo sa 0.5");
                return;
            }
        }
        else if (boj2send.pakovanjeId == 3) {
            var number = (boj2send.kolicina * 1000) / 500;
            var fixed = number.toFixed(6);
            var real = +fixed % 1;
            if (real != 0) {
                alert("Mora biti deljivo sa 0.5");
                return;
            }
        }
        else if (boj2send.pakovanjeId == 4) {
            var number = (boj2send.kolicina * 1000) / 600;
            var fixed = number.toFixed(6);
            var real = +fixed % 1;
            if (real != 0) {
                alert("Mora biti deljivo sa 0.6");
                return;
            }
        }
        else if (boj2send.pakovanjeId == 5) {
            var number = (boj2send.kolicina * 1000) / 50;
            var fixed = number.toFixed(6);
            var real = +fixed % 1;
            if (real != 0) {
                alert("Mora biti deljivo sa 0.10");
                return;
            }
        }
        console.log(boj2send);
        this.mservice.pakuj(boj2send).subscribe(function (dax) {
            console.log(dax);
            if (dax == null) {
                alert("Proverite da li imate dovoljno repro materijala");
                return;
            }
            alert("Uspesno zapakovano.");
        }, function (error) {
            alert(error.error.message);
        });
    };
    PakovanjeComponent.prototype.pakovanjeChange = function (event) {
        if (event != '0') {
            this.showbtn = true;
        }
        if (event == '1') {
            console.log("1323");
            this.showcrevo = true;
        }
        else if (event == '0') {
            this.showbtn = false;
            this.showcrevo = false;
        }
        else {
            this.showcrevo = false;
        }
    };
    PakovanjeComponent.prototype.magacinChange = function (event) {
        if (event != '0') {
            this.showdjubrivo = true;
        }
        else {
            this.showlot = false;
            this.showKolicina = false;
            this.showPakovanje = false;
            this.showcrevo = false;
            this.showbtn = false;
            this.showdjubrivo = false;
            this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.izvor_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        }
    };
    PakovanjeComponent.prototype.onChangeDjubrivo = function (event) {
        if (event != '0') {
            this.showlot = true;
        }
        else {
            this.showlot = false;
            this.showKolicina = false;
            this.showPakovanje = false;
            this.showcrevo = false;
            this.showbtn = false;
            this.kolicina = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
            this.izvor_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        }
    };
    PakovanjeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_3__["MagacinService"] }
    ]; };
    PakovanjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pakovanje',
            template: __webpack_require__(/*! raw-loader!./pakovanje.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/pakovanje/pakovanje.component.html"),
            styles: [__webpack_require__(/*! ./pakovanje.component.css */ "./src/app/view/pakovanje/pakovanje.component.css")]
        })
    ], PakovanjeComponent);
    return PakovanjeComponent;
}());



/***/ }),

/***/ "./src/app/view/parse/parse.component.css":
/*!************************************************!*\
  !*** ./src/app/view/parse/parse.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcGFyc2UvcGFyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/parse/parse.component.ts":
/*!***********************************************!*\
  !*** ./src/app/view/parse/parse.component.ts ***!
  \***********************************************/
/*! exports provided: ParseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseComponent", function() { return ParseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ParseComponent = /** @class */ (function () {
    function ParseComponent(mservice, router) {
        this.mservice = mservice;
        this.router = router;
        this.err = false;
        this.parsed = false;
        this.fileToUpload = null;
        this.columns = ["Magacin", "Djubrivo", "Pakovanje", "Smer", "Kolicina", "Lot", "Napomena"];
    }
    ParseComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['prijava']);
        }
    };
    ParseComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    ParseComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.mservice.postFile(this.fileToUpload).subscribe(function (data) {
            _this.obj4table = data;
            console.log(_this.obj4table);
            _this.parsed = true;
            if (_this.obj4table.length == 0) {
                _this.err = true;
            }
            else {
                _this.err = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ParseComponent.ctorParameters = function () { return [
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_2__["MagacinService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ParseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parse',
            template: __webpack_require__(/*! raw-loader!./parse.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/parse/parse.component.html"),
            styles: [__webpack_require__(/*! ./parse.component.css */ "./src/app/view/parse/parse.component.css")]
        })
    ], ParseComponent);
    return ParseComponent;
}());



/***/ }),

/***/ "./src/app/view/report/report.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/report/report.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/report/report.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/report/report.component.ts ***!
  \*************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/magacin.service */ "./src/app/services/magacin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








var ReportComponent = /** @class */ (function () {
    function ReportComponent(mservice, router) {
        this.mservice = mservice;
        this.router = router;
        this.napomena_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.magacin_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.lot_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.djubrivo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.pakovanje_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.smer_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.columns = ["Datum", "Pakovanje", "Smer", "Kolicina", "Stanje", "Lot", "Napomena"];
        this.nema = false;
        this.msg = false;
        this.datumOd = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.datumDo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.podsmer_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.triggerDatum = false;
        this.showTable = false;
        this.sortex = false;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("AuthToken") == null) {
            this.router.navigate(['login']);
        }
        this.mservice.getAll().subscribe(function (data) {
            _this.magacini = data;
            _this.mservice.getAllRoba().subscribe(function (robs) {
                _this.roba = robs;
                _this.mservice.getAllLots().subscribe(function (lt) {
                    _this.lots = lt;
                });
            });
        });
    };
    ReportComponent.prototype.sortByDate = function () {
        console.table(this.obj4table);
        this.sortex = !this.sortex;
        if (this.sortex) {
            this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](this.obj4table, 'datum');
        }
        else {
            this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](this.obj4table, 'datum').reverse();
        }
    };
    ReportComponent.prototype.filterTable = function () {
        var _this = this;
        console.log(this.datumOd);
        //console.log(odDatum);
        this.obj2filter = {
            magacinId: this.magacin_form.value,
            robaId: this.djubrivo_form.value,
            lotId: this.lot_form.value,
            pDatum: this.datumOd.value,
            kDatum: this.datumDo.value,
            pakovanjeId: this.pakovanje_form.value == "" ? 0 : this.pakovanje_form.value,
            smer: this.smer_form.value == "" ? "" : this.smer_form.value
        };
        this.obj4table = [];
        this.mservice.getPoDatumu(this.obj2filter).subscribe(function (data) {
            _this.obj4table = data;
            var summ = 0;
            if (_this.podsmer_form.value == "") {
                if (_this.smer_form.value == "ulaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'ulaz ';
                    });
                }
                if (_this.smer_form.value == "izlaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'izlaz ';
                    });
                }
            }
            else if (_this.podsmer_form.value == "dobavljac") {
                if (_this.smer_form.value == "ulaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'ulaz dobavljac';
                    });
                }
                /*
                if(this.smer_form.value == "izlaz") {
                  this.obj4table =  _.filter(this.obj4table, function(itm) {
                                                                        
                                                                            return itm.smer == 'izlaz ';
                                                                          })
                }
                */
            }
            else if (_this.podsmer_form.value == "interno") {
                if (_this.smer_form.value == "ulaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'ulaz interno';
                    });
                }
                if (_this.smer_form.value == "izlaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'izlaz interno';
                    });
                }
            }
            _this.obj4table.forEach(function (element) {
                summ += element.kolicina;
            });
            var sumElement = { datum: "", pakovanjeNaziv: "", smer: "", kolicina: null, novoStanje: "", lotNaziv: "", napomena: "" };
            sumElement.kolicina = summ;
            sumElement.kolicina = sumElement.kolicina.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            _this.headerobj = {
                mag: _this.obj4table[0].magacinNaziv,
                rob: _this.obj4table[0].robaNaziv,
                lot: _this.obj4table[0].lotNaziv
            };
            _this.obj4table.push(sumElement);
            console.clear();
        });
    };
    ReportComponent.prototype.addNapomena = function (id) {
        console.log(id);
        if (this.napomena_form.value == "") {
            alert("Unesite napomenu.");
            return;
        }
        var obj2send = {
            "napomena": this.napomena_form.value,
            "id": id.id
        };
        this.mservice.addNapomena(obj2send).subscribe(function (data) {
            alert("Dodata napomena");
            id.hasNapomena = true;
            id.napomena = data.napomena;
        });
        this.napomena_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
    };
    ReportComponent.prototype.showTa = function () {
        var _this = this;
        if (this.magacin_form.value == "" || this.djubrivo_form.value == "") {
            this.msg = true;
            return;
        }
        this.showTable = true;
        this.obj2filter = {
            magacinId: this.magacin_form.value,
            robaId: this.djubrivo_form.value,
            lotId: this.lot_form.value,
            pDatum: "",
            kDatum: "",
            pakovanjeId: this.pakovanje_form.value == "" ? 0 : this.pakovanje_form.value,
            smer: this.smer_form.value == "" ? "" : this.smer_form.value
        };
        this.mservice.getAllPromena(this.obj2filter).subscribe(function (data) {
            console.log("promene");
            _this.obj4table = data;
            _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](_this.obj4table, 'datum').reverse();
            if (_this.podsmer_form.value == "") {
                if (_this.smer_form.value == "ulaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'ulaz ';
                    });
                }
                if (_this.smer_form.value == "izlaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'izlaz ';
                    });
                }
            }
            else if (_this.podsmer_form.value == "dobavljac") {
                if (_this.smer_form.value == "ulaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'ulaz dobavljac';
                    });
                }
                /*
                if(this.smer_form.value == "izlaz") {
                  this.obj4table =  _.filter(this.obj4table, function(itm) {
                                                                        
                                                                            return itm.smer == 'izlaz ';
                                                                          })
                }
                */
            }
            else if (_this.podsmer_form.value == "interno") {
                if (_this.smer_form.value == "ulaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'ulaz interno';
                    });
                }
                if (_this.smer_form.value == "izlaz") {
                    _this.obj4table = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](_this.obj4table, function (itm) {
                        return itm.smer == 'izlaz interno';
                    });
                }
            }
            console.log(_this.obj4table);
            if (_this.obj4table.length == 0) {
                _this.showTable = false;
                _this.nema = true;
            }
            else {
                _this.showTable = true;
                _this.nema = false;
            }
            var summ = 0;
            _this.obj4table.forEach(function (element) {
                summ += element.kolicina;
                if (element.smer == 'ulaz kupac') {
                    element.smer = 'ulaz';
                }
                if (element.novoStanje <= 100) {
                    element.urgent = true;
                    element.needed = false;
                }
                else if (element.novoStanje <= 500 && element.novoStanje > 100) {
                    element.urgent = false;
                    element.needed = true;
                }
                else {
                    element.urgent = false;
                    element.needed = false;
                }
                if (element.napomena == "" || element.napomena == null || element.napomena == undefined) {
                    element.hasNapomena = false;
                }
                else {
                    element.hasNapomena = true;
                }
            });
            console.log("konacno");
            console.log(_this.obj4table);
            var sumElement = { datum: "", pakovanjeNaziv: "", smer: "", kolicina: null, novoStanje: "", lotNaziv: "", napomena: "" };
            sumElement.kolicina = summ;
            sumElement.kolicina = sumElement.kolicina.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            _this.obj4table.push(sumElement);
        });
        this.headerobj = {
            mag: this.obj4table[0].magacinNaziv,
            rob: this.obj4table[0].robaNaziv,
            lot: this.obj4table[0].lotNaziv
        };
        console.clear();
    };
    ReportComponent.prototype.onSort = function (event) {
    };
    ReportComponent.prototype.downloadAsPdf = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        doc.autoTable({ html: '#tableid' });
        doc.save("Izve\u0161taj-" + this.obj4table[0].magacinNaziv + "-" + this.obj4table[0].robaNaziv + "-" + new Date().toLocaleDateString() + ".pdf");
        console.clear();
        /*
      doc.setFontSize(20);
      doc.setFont('Georgia','serif');
      var img = new Image();
      img.src = '../../assets/logo.png';
      doc.addImage(img, 'PNG', 12, 10);
      doc.text(12, 40, `${this.obj4table[0].magacinNaziv}`);
      doc.text(12, 50, `${this.obj4table[0].robaNaziv}`);
      doc.text(12, 60, `LOT${this.obj4table[0].lotNaziv}`);
      
      let element = <HTMLScriptElement>document.getElementById("tableid");
  
    
      html2canvas(element)
        .then((canvas: any) => {
            console.log(element);
            doc.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 12,70,
                          doc.internal.pageSize.width/1.3, element.offsetHeight/4 );
            doc.save(`Izveštaj-${Date.now()}.pdf`);
        })
  
  */
    };
    ReportComponent.ctorParameters = function () { return [
        { type: src_app_services_magacin_service__WEBPACK_IMPORTED_MODULE_4__["MagacinService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/view/report/report.component.css")]
        })
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    apiUrl: 'https://promist-logistics-app.herokuapp.com/',
    //apiUrl: 'http://localhost:8080/',
    debugMode: false,
    production: true
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    apiUrl: 'https://promist-logistics-app.herokuapp.com/',
    //apiUrl: 'http://localhost:8080/',
    debugMode: false,
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\promist-logistics\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map