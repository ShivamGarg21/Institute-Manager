**Schema**
**entries** table to contain all entries
[    
    institute: {
        type: String,
        required: true,
    },
    entity: {
        type: String,
        required: true,
    },
    standard: {
        type: String,
        required: true
    },
    subjects: {
        type: [String],
        required: true
    }
]

**Institute Details to contain all the institutes along with entity_types**
entity_type will help to find the necessary entity - like board, university
    type: {
        type: String,
        required: true,
    },
    entity_type: {
        type: String,
        required: true
    }

**entities contains all the available universities and schools and exams**
constains standard_type to help find which right standard will come in next api for right student.
    type: {
        type: String,
        required: true,
    },
    entity_name: {
        type: String,
        required: true,
    },
    standard_type: {
        type: String,
        required: true
    }
    
**standard_details contains all the classes and subject related data**
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    classes: {
        type: [String],
        required: true,
    },
    subjects: {
        type: [String],
        required: true,
    }

**Api's Curl and responses**

**Post request to save entries**
curl --location 'http://localhost:9000/app/institute/entries' \
--header 'Authorization: Bearer RG1W4AthTxugJ0ZpD8IlLNrgk8QGblS6q6lHe3VyrMQ=' \
--header 'Content-Type: application/json' \
--data '{
    "institute": "School",
    "entity": "CBSE",
    "standard": "Pre-primary",
    "subjects": ["English", "Hindi"]
}'

**get request to fetch available institute**
curl --location 'http://localhost:9000/app/institute/type' \
--header 'Authorization: Bearer RG1W4AthTxugJ0ZpD8IlLNrgk8QGblS6q6lHe3VyrMQ=' \
--header 'Content-Type: application/json'

**response**
[
    {
        "_id": "67603053be22de76a686b01d",
        "type": "school",
        "entity_type": "board"
    },
    {
        "_id": "67603053be22de76a686b01e",
        "type": "college",
        "entity_type": "university"
    }
]

**get request to know the board**
curl --location 'http://localhost:9000/app/institute/entity/board' \
--header 'Authorization: Bearer RG1W4AthTxugJ0ZpD8IlLNrgk8QGblS6q6lHe3VyrMQ=' \
--header 'Content-Type: application/json'

**response**
[
    {
        "_id": "67603324be22de76a686b023",
        "type": "board",
        "entity_name": "CBSE",
        "standard_type": "school"
    },
    {
        "_id": "67603324be22de76a686b024",
        "type": "board",
        "entity_name": "GBSE",
        "standard_type": "school"
    }
]

**get request to get standard and class and same time**
curl --location 'http://localhost:9000/app/institute/standard/school' \
--header 'Authorization: Bearer RG1W4AthTxugJ0ZpD8IlLNrgk8QGblS6q6lHe3VyrMQ=' \
--header 'Content-Type: application/json'

**response**
[
    {
        "_id": "67603765be22de76a686b027",
        "type": "school",
        "name": "Pre-Primary",
        "classes": [
            "LKG",
            "UKG"
        ],
        "subjects": [
            "English",
            "Hindi"
        ]
    },
    {
        "_id": "67603765be22de76a686b028",
        "type": "school",
        "name": " Higher Secondary",
        "classes": [
            "9th",
            "10th"
        ],
        "subjects": [
            "Maths",
            "Science"
        ]
    }
]
