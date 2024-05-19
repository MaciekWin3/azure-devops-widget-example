import * as SDK from "azure-devops-extension-sdk"
import * as Dashboard from "azure-devops-extension-api/Dashboard";

SDK.init()
SDK.register("azure-devops-widget-example", function () {
    return {
        load: function (widgetSettings) {
            return Dashboard.WidgetStatusHelper.Success();
        },
    }
});
SDK.notifyLoadSucceeded();