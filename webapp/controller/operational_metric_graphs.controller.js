sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
    "use strict";

    return BaseController.extend("com.sap.build.standard.creditHealth.controller.operational_metric_graphs", {
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
_onImagePress4: function (oEvent) {
            		
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
        this.oRouter.getTarget("operational_metric_graphs").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

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
    
        var oData = [{"dim0":"Jan-11","mea0":"72298"},{"dim0":"Jan-12","mea0":"82731"},{"dim0":"Jan13","mea0":"92747"},{"dim0":"Jan-14","mea0":"102204"},{"dim0":"Jan-15","mea0":"113694"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491307394479":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491307394479","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307394479").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307394479").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"Jan-11","mea0":"7085"},{"dim0":"Jan-12","mea0":"12745"},{"dim0":"Jan-13","mea0":"15184"},{"dim0":"Jan-14","mea0":"17217"},{"dim0":"Jan-15","mea0":"19092"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491307716158":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491307716158","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307716158").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307716158").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"JAN-11","mea0":"6.83"},{"dim0":"JAN-12","mea0":"6.83"},{"dim0":"JAN-13","mea0":"7.23"},{"dim0":"JAN-14","mea0":"7.29"},{"dim0":"JAN-15","mea0":"7.44"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491307723949":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491307723949","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307723949").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307723949").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"JAN-11","mea0":"30"},{"dim0":"JAN-12","mea0":"24.1"},{"dim0":"JAN-13","mea0":"18.76"},{"dim0":"JAN-14","mea0":"17.32"},{"dim0":"JAN-15","mea0":"18.83"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491307752765":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491307752765","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307752765").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307752765").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"JAN-11","mea0":"3.74"},{"dim0":"JAN-12","mea0":"3.2"},{"dim0":"JAN-13","mea0":"2.88"},{"dim0":"JAN-14","mea0":"2.76"},{"dim0":"JAN-15","mea0":"2.69"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491308067923":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491308067923","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491308067923").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491308067923").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    
        var oData = [{"dim0":"FY-11","mea0":"20.3"},{"dim0":"FY-12","mea0":"20.52"},{"dim0":"FY-13","mea0":"20.95"},{"dim0":"FY-14","mea0":"20.81"},{"dim0":"FY-15","mea0":"20.68"}];
        oView.getModel("staticDataModel").setData({"sap_m_Page_0-content-sap_chart_ColumnChart-1491308078787":oData}, true);
        this.oBindingParameters = {"path":"/sap_m_Page_0-content-sap_chart_ColumnChart-1491308078787","parameters":{},"model":"staticDataModel"};
        oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491308078787").bindData(this.oBindingParameters);
        var aDimensions = oView.byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491308078787").getDimensions();
        aDimensions.forEach(function(oDimension) {
            oDimension.setTextFormatter(dateDimensionFormatter);
        });
    


        },
onAfterRendering: function () {
            		
        var oBindingParameters, oChart;
        
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307394479");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307716158");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307723949");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491307752765");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491308067923");
        oChart.bindData(oChart.getBindingInfo("data"));
        oChart = this.getView().byId("sap_m_Page_0-content-sap_chart_ColumnChart-1491308078787");
        oChart.bindData(oChart.getBindingInfo("data"));


        }
});
}, /* bExport= */true);
