export const schema = {
    "type": "object",
    "properties": {
        "products": {
            "type": "array",
            "maxItems": 30,
            "minItems": 15,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1,
                        "maximum": 1000
                    },
                    "name": {
                        "type": "string",
                        "faker": "commerce.productName"
                    },
                    "price": {
                        "type": "number",
                        "faker": "commerce.price"
                    },
                    "imageUrl" : "/images/shop/product-7.jpg",
                    "category" : {
                        "type" : "string",
                        "pattern" : "one|two|three|four"
                    }
                },
                "required" : ["id", "name", "price", "imageUrl", "category"]
            }
        }
    },
    "required" : ["products"]
}