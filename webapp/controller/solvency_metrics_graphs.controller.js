sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
    "use strict";

    return BaseController.extend("com.sap.build.standard.creditHealth.controller.solvency_metrics_graphs", {
    handleRouteMatched: function (oEvent) {
            		
		var oParams = {}; 
		
		if (oEvent.mParameters.data.context) { 
		    this.sContext = oEvent.mParameters.data.context;
		    var oPath; 
		    if (this.sContext) { 
		        oPath = {path: "/" + this.sContext, parameters: oParams}; 
		        this.getView().bindObject(oPath);
		    } 
		}
		
		
		
        },
_onImagePress8: function (oEvent) {
            		
		var oBindingContext = oEvent.getSource().getBindingContext(); 
		
		return new Promise(function(fnResolve) {
		
		    this.doNavigate("debtor_details_page", oBindingContext, fnResolve, ""
		    );
		}.bind(this)).catch(function (err) { if (err !== undefined) { MessageBox.error(err.message); }});
		
        },
doNavigate: function (sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
            		
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oModel = (oBindingContext) ? oBindingContext.getModel() : null;
		
		var sEntityNameSet;
		if (sPath !== null && sPath !== "") {
		    if (sPath.substring(0, 1) === "/") {
		        sPath = sPath.substring(1);
		    }
		    sEntityNameSet = sPath.split("(")[0];
		}
		var sNavigationPropertyName;
		var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;
		
		if (sEntityNameSet !== null) {
		    sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
		}
		if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
		    if (sNavigationPropertyName === "") {
		        this.oRouter.navTo(sRouteName, {
		            context: sPath,
		            masterContext: sMasterContext
		        }, false);
		    } else {
		        oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function (bindingContext) {
		            if (bindingContext) {
		                sPath = bindingContext.getPath();
		                if (sPath.substring(0, 1) === "/") {
		                    sPath = sPath.substring(1);
		                }
		            }
		            else {
		                sPath = "undefined";
		            }
		
		            // If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
		            if (sPath === "undefined") {
		                this.oRouter.navTo(sRouteName);
		            } else {
		                this.oRouter.navTo(sRouteName, {
		                    context: sPath,
		                    masterContext: sMasterContext
		                }, false);
		            }
		        }.bind(this));
		    }
		} else {
		    this.oRouter.navTo(sRouteName);
		}
		
		if (typeof fnPromiseResolve === "function") {
		    fnPromiseResolve();
		}
        },
onInit: function () {
            		
        this.mBindingOptions = {};
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this.oRouter.getTarget("solvency_metrics_graphs").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

        var oView = this.getView();
        var oModel = new sap.ui.model.json.JSONModel();
        oView.setModel(oModel, "staticDataModel");
        function dateDimensionFormatter(dimensionValue) {
            if(dimensionValue instanceof Date) {
                var oFormat = sap.ui.core.format.DateFormat.getDateInstance({style: "short"});
            	return oFormat.format(dimensionValue);
            }
            return dimensionValue;
        }
    
        var oData = [{"dim0":"JAN-2011","mea0":"39.17"},{"dim0":"JAN-2012","mea0":"0"},{"dim0":"JAN-2013","mea0":"0"},{"dim0":"JAN-2014","mea0":"0"},{"dim0":"JAN-2015","mea0":"16.69"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491311455654":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491311455654","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311455654").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311455654").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"JAN-2011","mea0":"0.03"},{"dim0":"JAN-2012","mea0":"0.2"},{"dim0":"JAN-2013","mea0":"0.18"},{"dim0":"JAN-2014","mea0":"0.21"},{"dim0":"JAN-2015","mea0":"0.2"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491311563910":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491311563910","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311563910").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311563910").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"JAN-2011","mea0":"1.78"},{"dim0":"JAN-2012","mea0":"49.43"},{"dim0":"JAN-2013","mea0":"59.45"},{"dim0":"JAN-2014","mea0":"56.02"},{"dim0":"JAN-2015","mea0":"61.96"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491311829090":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491311829090","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311829090").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311829090").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    


        },
onAfterRendering: function () {
            		
        var oBindingParameters, oChart;
        
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311455654");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311563910");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491311829090");
        oChart.bindData(oChart.getBindingInfo("data"));


        }
});
}, /* bExport= */true);
