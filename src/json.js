export const json=
{
    "title": "Form",
    "logoPosition": "right",
    "pages": [
     {
      "name": "Name",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Name"
       }
      ],
      "title": "Survey"
     },
     {
      "name": "Email",
      "elements": [
       {
        "type": "text",
        "name": "question2",
        "title": "Email",
        "validators": [
         {
          "type": "email"
         }
        ],
        "maxLength": 64
       }
      ],
      "title": "Survey"
     },
     {
      "name": "Year",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Year",
        "choices": [
         {
          "value": "Item 3",
          "text": "1st year"
         },
         {
          "value": "Item 4",
          "text": "2nd year"
         },
         {
          "value": "Item 5",
          "text": "3rd year"
         },
         {
          "value": "Item 6",
          "text": "4th year"
         }
        ]
       }
      ],
      "title": "Survey"
     },
     {
      "name": "Branch",
      "elements": [
       {
        "type": "dropdown",
        "name": "question4",
        "title": "Branch",
        "choices": [
         {
          "value": "Item 1",
          "text": "CSE"
         },
         {
          "value": "Item 2",
          "text": "IT"
         },
         {
          "value": "Item 3",
          "text": "ECE"
         },
         {
          "value": "Item 4",
          "text": "Mech"
         }
        ]
       }
      ],
      "title": "Survey"
     },
     {
      "name": "Gender",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "Gender",
        "choices": [
         {
          "value": "Item 1",
          "text": "Male"
         },
         {
          "value": "Item 2",
          "text": "Female"
         },
         {
          "value": "Item 3",
          "text": "Transgender"
         }
        ]
       }
      ],
      "title": "Survey"
     },
     {
      "name": "Field",
      "elements": [
       {
        "type": "checkbox",
        "name": "question6",
        "title": "Field Of Specialization (You can select more than 1 field)",
        "choices": [
         {
          "value": "Item 1",
          "text": "CP"
         },
         {
          "value": "Item 2",
          "text": "Frontend Development"
         },
         {
          "value": "Item 3",
          "text": "Backend Development"
         },
         {
          "value": "Item 4",
          "text": "Business Development"
         },
         {
          "value": "Item 5",
          "text": "Graphics Designing"
         },
         {
          "value": "Item 6",
          "text": "Others"
         }
        ]
       }
      ],
      "title": "Survey"
     },
     {
      "name": "img",
      "elements": [
       {
        "type": "file",
        "name": "question8",
        "title": "Uplaod Your Image"
       }
      ],
      "title": "Survey"
     },
     {
      "name": "resume",
      "elements": [
       {
        "type": "file",
        "name": "question7",
        "title": "Upload Your Resume"
       }
      ],
      "title": "Survey"
     },
     {
      "name": "chooseimg",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question9",
        "title": "Choose the image of cat",
        "choices": [
         {
          "value": "item1",
         },
         {
          "value": "item2",
         }
        ]
       }
      ],
      "title": "Survey"
     },
     {
      "name": "rate",
      "elements": [
       {
        "type": "rating",
        "name": "question11",
        "title": "Rating"
       }
      ],
      "title": "Survey"
    },
],
// }
completeText: "Submit",
};

