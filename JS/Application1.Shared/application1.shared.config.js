
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
        }
    }
});
