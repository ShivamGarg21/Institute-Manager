**Summary**
The schema and APIs are part of a system designed to organize and manage educational data, establishing relationships between institutes, entities, standards, classes, and subjects. Here’s how they interconnect:

**Institutes and Entity Types**: The institute details table maps institute types (e.g., schools, colleges) to their entity types (e.g., boards like CBSE or universities). This relationship establishes the framework for categorizing educational institutions and their governing entities, ensuring precise differentiation.

**Entities and Standards**: The entities table contains information about organizations like boards (CBSE, GBSE) or universities. Each entity has a standard_type that defines its associated standard framework, such as schools having pre-primary or higher-secondary standards. This mapping ensures that the right standards are linked to the respective entity.

**Standards, Classes, and Subjects:** The standard_details table provides detailed class structures and associated subjects for each standard_type. For example, "Pre-Primary" includes classes like LKG and UKG with subjects such as English and Hindi, while "Higher Secondary" includes classes 9th and 10th, focusing on subjects like Maths and Science.

**Entries:** The entries table ties these components together by associating a specific institute type, entity (e.g., CBSE), standard, and subjects. This allows for saving and retrieving structured educational data.

The APIs support these relationships by enabling the saving of entries, retrieving institutes and their types, fetching specific entities like boards, and linking standards with their respective classes and subjects. This interconnected system streamlines managing educational data for effective administration and retrieval.

Here’s an explanation of the table relationships using **Primary Key (PK)** and **Foreign Key (FK)** terminology:

| **Table Name**          | **Column**             | **Relation**                                                   | **Primary Key (PK)**         | **Foreign Key (FK)**                     |
|--------------------------|------------------------|-----------------------------------------------------------------|-------------------------------|-------------------------------------------|
| **Institute Details**    | `entity_type`          | Defines the type of entity (e.g., board, university).            | `type`                        | -                                         |
| **Entities**             | `type`, `entity_name` | Maps entities (e.g., CBSE, GBSE) to their standard type.         | `type`, `entity_name`         | `entity_type` references `Institute Details.entity_type` |
| **Standard Details**     | `type`, `name`        | Lists standards (e.g., Pre-primary, Higher Secondary) and subjects. | `type`, `name`               | `type` references `Entities.standard_type` |
| **Entries**              | `institute`, `entity`, `standard`, `subjects` | Links all components for each entry.                           | -                             | - `institute` references `Institute Details.type`  <br> - `entity` references `Entities.entity_name` <br> - `standard` references `Standard Details.name` |

### **Details of Foreign Key Relationships**:
1. **Institute Details ↔ Entities**:  
   - `entity_type` in **Institute Details** serves as the PK.  
   - `entity_type` in **Entities** is a FK referencing the `entity_type` in **Institute Details**.  
   This maps institutes (like schools or colleges) to their respective boards or universities.

2. **Entities ↔ Standard Details**:  
   - `standard_type` in **Entities** serves as the FK.  
   - `type` in **Standard Details** references the `standard_type` in **Entities**.  
   This connects specific entities (e.g., CBSE) to relevant standards (e.g., Pre-primary).

3. **Entries ↔ All Tables**:  
   - **Institute Details**: `institute` in **Entries** references the `type` in **Institute Details**.  
   - **Entities**: `entity` in **Entries** references the `entity_name` in **Entities**.  
   - **Standard Details**: `standard` in **Entries** references the `name` in **Standard Details**.  

This structure uses primary and foreign keys to enforce referential integrity, ensuring data consistency across the system.


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
