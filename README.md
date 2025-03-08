This is a Dynamic Form Generator using React fromwork NEXT_JS and recursion. The form is generated based on a JSON schema(schema.json), supporting various field types such as text inputs, select dropdowns, checkboxes, and nested sections (like Education, Work Experience, etc.).

-The Dynamic Form component(/components/DynamicForm.tsx) that renders form fields based on a JSON structure(schema.json)
-The form is fully configurable using a JSON file.
-The form  adapt based on the provided JSON structure without requiring manual updates. Used recursion to render nested sections dynamically.
-Validation is present in all the required fields 
-Used Tailwindcss for styling
-The submitted data is 
-On submit form displays the data in string format Below the submit button (no css added to keep the display dynamic and all the form can be changed by just a json file)





## Getting Started

1- Clone the repo: git clone "github project link"
2- Install dependencies : Run npm i
3- Run the server : npm run dev



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can add more fields and form data by  editing the schema.json 



