/* Created Own Resume Json formet and used loops for, forin, forof, foreach

Soluction:
 */


let Resume =  {
    "PersonalInfo" : {
        "Name" : "Ulaganathan.A",
        "PhoneNo": "9944014427",
        "EmailID" : "Ulaganathan070996@gmail.com",
        "location" : "Trichy"
    },
    "Education" :{
        "Institute": "Dhanalakshmi Srinivasan Engineering College",
        "DegreeType": "UG",
        "Degree" : "B.E.Mechanical Engineer",
        "Passedout": "2020"
    },
    "Workexpriences": [
        {
            "FirstCompany" : "Strom It Soluction",
            "Role" : "Software Tester",
            "Joing Date": "10-May-2020",
            "Reliving Date": "10-June-2022",
            "Year of experience" : "Two years",
            "Responsibility" : "Conducted comprehensive manual testing for the login page and booking domine and ensure functional correctness Implemented field validations and error message checks for robust user input handling."
        },
        {
            "SecondCompany" : "Art Technologies Software pvt ltd company",
            "Role": "Consulate Quality Engineer",
            "Joing Date": "17-Aug-2023",
            "Reliving Date": "Till in same company",
            "Year of experience": "1.4 years",
            "Responsibility" : "I have worked on Banking payment gatway domain in this domain I have verified Transaction status create transaction and clearing the transactions verifyied the purchaesd amount was successfully credited in merchant account both manuall and automated the payment gateway"
        }
    ],
    "Skills" : [
        "C#",
        "Cucumber",
        ".NetFramework",
        "Javascript",
        "Node JS",
        "MangoDB",
        "AngularJS",
        "AWS EC2",
        "Jenkins",
        "Python"
    ],
    "GitHub URl" : "https://github.com/Ulaganathan0709"
}

let ResumeJSON = JSON.stringify(Resume);
ResumeJSON = JSON.parse(ResumeJSON);
// Get all the keys of the ResumeJSON object
let keys = Object.keys(ResumeJSON);

// Iterate over the keys using a standard for loop
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key);

    // Check if the property is an object but not an array
    if (typeof ResumeJSON[key] === 'object' && !Array.isArray(ResumeJSON[key])) 
    {
        for (let j in ResumeJSON[key]) 
        {
            console.log(`  ${j}: ${ResumeJSON[key][j]}`);
        }
    }
    //handling for the and Skills array
    else if (key === 'Skills') {
        ResumeJSON[key].forEach((skill, index) => {
            console.log(`  ${index + 1}: ${skill}`);
        });
    }
    //handling for the Workexpriences
    else if (Array.isArray(ResumeJSON[key])) 
    {
        for (let item of ResumeJSON[key]) 
        {
            if (typeof item === 'object') 
            {
                for (let k in item) 
                {
                    console.log(`  ${k}: ${item[k]}`);
                }
            }
        }
    }
    // Print the value if it's a direct property
    else
    {
        console.log(`  ${ResumeJSON[key]}`);
    }
}
