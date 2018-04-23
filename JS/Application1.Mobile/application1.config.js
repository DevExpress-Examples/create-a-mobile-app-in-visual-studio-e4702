
// NOTE object below must be a valid JSON
window.Application1 = $.extend(true, window.Application1, {
	"config": {
		"endpoints": {
			"db": {
				"local": "http://sampleservices.devexpress.com/Northwind.svc/",
				"production": "http://sampleservices.devexpress.com/Northwind.svc/"
			}
		},
		"services": {
			"db": {
				"entities": {
					"Categories": {
						"key": "CategoryID",
						"keyType": "Int32"
					},
					"Products": {
						"key": "ProductID",
						"keyType": "Int32"
					}
				}
			}
		},
		"layoutSet": "navbar",
		"navigation": [
			{
			    "title": "Categories",
			    "onExecute": "#categories",
			    "icon": "home"
			},
            {
                "title": "About",
                "onExecute": "#About",
                "icon": "info"
            }
		],
		"commandMapping": {
			"ios-header-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "after"
					}
				]
			},
			"android-footer-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			},
			"tizen-footer-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			},
			"generic-header-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "after"
					}
				]
			},
			"win8-phone-appbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			}
		}
	}
});
