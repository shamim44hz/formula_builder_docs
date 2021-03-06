import { cond } from "lodash";
import { inc } from "semver";

export const inputFields = [
    {
        id: "ae01d224-f568-4a8c-b65a-b924643c7e69",
        value: " ( ",
        componentType: "(",
        operator: "(",
        isHover: false,
        addButton: false,
    },
    {
        id: "cd14cd86-81f1-46b2-af9d-89dce24660bd",
        value: " ( ",
        componentType: "(",
        operator: "(",
        isHover: false,
        addButton: false,
    },
    {
        id: "315039c7-e378-4cf5-8aca-73f100b702ef",
        value: " ( ",
        componentType: "(",
        operator: "(",
        isHover: false,
        addButton: false,
    },
    {
        id: "1aa3c66d-5f3e-4e40-b124-48085ee858e1",
        value: "SUM",
        componentType: "AGGR",
        operator: "AGGR",
        isHover: false,
        addButton: false,
    },
    {
        id: "35284a1c-61c3-434b-bc8a-c22d793ad964",
        value: "Country",
        componentType: "CH",
        operator: "CH",
        isHover: false,
        addButton: false,
    },
    {
        id: "e7ded8f6-819a-4048-b9ca-dfad7874ba2e",
        value: " WHERE ",
        componentType: "WHERE",
        operator: "WHERE",
        isHover: false,
        addButton: false,
    },
    {
        id: "308acba8-368a-4983-bf55-ff3b3987495e",
        value: "Major_City",
        componentType: "CH",
        operator: "CH",
        isHover: false,
    },
    {
        id: "61b6c19c-d548-4fa2-8afb-a0bfe07b5fcc",
        value: "<>",
        componentType: "Comparator",
        operator: "Comparator",
        isHover: false,
    },
    {
        id: "7d9d58d3-a7a7-4cf5-b570-eb86dc902f06",
        value: ["Alhambra", "Aliso Viejo", "Bakersfield"],
        componentType: "Categorical",
        operator: "Categorical",
        isHover: false,
    },
    {
        id: "3e250799-2a87-4b80-b852-0a970378c137",
        value: " ) ",
        componentType: ")",
        operator: ")",
        isHover: false,
        addButton: false,
    },
    {
        id: "aab5117c-b361-4670-b0b4-7bd4eb72bd98",
        value: "/",
        componentType: "MATH",
        operator: "MATH",
        isHover: false,
        addButton: false,
    },
    {
        id: "f1ac1876-de60-4a23-aaba-312058bdca7f",
        value: " ( ",
        componentType: "(",
        operator: "(",
        isHover: false,
        addButton: false,
    },
    {
        id: "3e456d9c-c2e2-4774-89fd-f2ba28362a8e",
        value: "COUNT",
        componentType: "AGGR",
        operator: "AGGR",
        isHover: false,
        addButton: false,
    },
    {
        id: "d7c5443b-0c4f-4011-aea6-c1ab5c7fc9c9",
        value: "County",
        componentType: "CH",
        operator: "CH",
        isHover: false,
        addButton: false,
    },
    {
        id: "abb0df38-410b-435d-985e-d7eaa5003bc9",
        value: " ) ",
        componentType: ")",
        operator: ")",
        isHover: false,
        addButton: false,
    },
    {
        id: "c4a39aaa-e01a-49a3-b6d7-1f9a13df4bed",
        value: "x",
        componentType: "MATH",
        operator: "MATH",
        isHover: false,
        addButton: false,
    },
    {
        id: "ceb09e6b-ad78-4da7-88de-d760e3d74d6c",
        value: " ( ",
        componentType: "(",
        operator: "(",
        isHover: false,
        addButton: false,
    },
    {
        id: "797da863-cb91-47e2-9e5b-c4f363acc0f0",
        value: "SUM",
        componentType: "AGGR",
        operator: "AGGR",
        isHover: false,
        addButton: false,
    },
    {
        id: "ff373c81-6d82-46fe-93fe-3fc4df6418c6",
        value: "Country",
        componentType: "CH",
        operator: "CH",
        isHover: false,
        addButton: false,
    },
    {
        id: "82fdac71-5168-48ca-91da-94e27ae58833",
        value: " WHERE ",
        componentType: "WHERE",
        operator: "WHERE",
        isHover: false,
        addButton: false,
    },
    {
        id: "286e8d20-fd50-4e46-b0af-5f0ae13c086d",
        value: "Major_City",
        componentType: "CH",
        operator: "CH",
        isHover: false,
    },
    {
        id: "3c26b993-ae66-4683-904e-8c7f12f3bca2",
        value: "=",
        componentType: "Comparator",
        operator: "Comparator",
        isHover: false,
    },
    {
        id: "3ceefb21-2e1f-484c-89b2-e40d58d4ea8f",
        value: ["Aliso Viejo", "Anderson", "Bellflower"],
        componentType: "Categorical",
        operator: "Categorical",
        isHover: true,
    },
    {
        id: "626acd8e-9690-4e08-9a3c-23e23b9f8511",
        value: "AND",
        componentType: "AND",
        operator: "AND",
        isHover: false,
    },
    {
        id: "0269e4e4-6d02-448f-b1e6-c8ba24717ddb",
        value: "TCV",
        componentType: "CH",
        operator: "CH",
        isHover: false,
    },
    {
        id: "277c904b-f8bb-438c-aad0-9e5d75ddec3f",
        value: "<=",
        componentType: "Comparator",
        operator: "Comparator",
        isHover: false,
    },
    {
        id: "d54e2576-7e79-4d5a-8b6d-99f01d209035",
        value: "242442444",
        componentType: "Numerical",
        operator: "Numerical",
        isHover: false,
    },
    {
        id: "4d504bc9-fe9d-4d38-94f9-11467615e11a",
        value: "",
        componentType: "AND",
        operator: "AND",
    },
    {
        id: "5b26bcfe-4450-4382-99fd-247f8374b4d6",
        value: " ) ",
        componentType: ")",
        operator: ")",
        isHover: false,
        addButton: false,
    },
    {
        id: "be816454-0fde-4751-9430-1779e6267af0",
        value: " ) ",
        componentType: ")",
        operator: ")",
        isHover: false,
        addButton: false,
    },
];

let myFormula = "";

for (let item of inputFields) myFormula += `${item.value} `;

console.log(myFormula);

// const brace = " ( ( Aggr CH WHERE CH = ABC,EFG,GHI ) / ( Aggr CH WHERE ABC = 100  ) * ( 1 + 2 ) ) ";

const splitted = myFormula.split(" ");
const math = ["+", "-", "/", "*"];
const aggr = ["SUM", "COUNT", "AVG"];

console.log(splitted);
// let stack = []
let includeList = [];

// console.log(stack)

let i = 0;

/**
 * NOTES:
 * 1. After AGGR one has to close the operators bracket
 * 2. Handle all the states accordingly on bracket close
 *
 * PROBLEMS I AM FACING:
 * 1. If i
 */


while (i < splitted.length) {
    if (splitted[i] === "(") {
        includeList.push(splitted[i]);
        i += 1;
        if (i === splitted.length - 1) break;
    } else if (aggr.includes(splitted[i])) {
        let beforeWhere = [];
        let afterWhere = [];
        includeList.push(splitted[i]);
        i++;
        while (splitted[i] !== "WHERE" && splitted[i] !== ")") {
            beforeWhere.push(splitted[i]);
            // console.log(splitted[i]);
            i++;
            if (i === splitted.length - 1) break;
        }
        while (splitted[i] !== ")") {
            //here
            // console.log(splitted[i]);
            afterWhere.push(splitted[i]);
            i++;
            if (i === splitted.length - 1) break;
        }
        includeList.push(beforeWhere);
        // console.log(beforeWhere)

        includeList.push(afterWhere);
        // console.log(afterWhere)

        includeList.push(splitted[i]);
        if (math.includes(splitted[i])) includeList.push(splitted[i]);
        if (i === splitted.length - 1) break;
    } else {
        includeList.push(splitted[i]);
        i++;
    }
}

// console.log(includeList);

const matcher = {
    "=": "in",
    "<>": "not in",
    ">=": ">=",
    "<=": "<="
  };

let helloStr = ""

const handleWhere = (items) => {
    console.log(items)
    console.log(Object.keys(matcher))
    let i = 0
    while(i < items.length) {
        if (items[i] === "WHERE") i += 1
        else if (Object.keys(matcher).includes(items[i])) {
            let storeMatcher = items[i]
            i += 1
            let joiner = []
            let joinerItems;
            while (items[i] !== 'AND') {
                joiner.push(items[i])       
                joinerItems = joiner.join(" ").split(",")
                console.log(joinerItems.length)
                i += 1
                if (i === items.length - 1) break
            }
        } else {
            helloStr += items[i]
            i += 1
        }
    }
}

const template = {
    select: ["1 as join_key", ""], // 1 as join_key" DEFAULT // COUNT(SRN) as tot_count
    group_by: ["join_key"], //DEFAULT
    where: ["PM_or_BD_Call = 'BD' and Status in ('Closed', 'Completed')"],
    from: {}, //DEFAULT
    left_join: true, //DEFAULT
};

let myTemplate = {...template}
//   "(Nr_count / tot_count) * 100 as \" BD Four Hour Reach %\""

let finalTemplates = [];

let myStr = ""

let item = 0

let counter = 0;

while(item < includeList.length) {
    let tempStr;
    
    if (aggr.includes(includeList[item])) {
        tempStr = `"${includeList[item]} (${includeList[item + 1]}) as part_${counter}"`
        myStr += `part_${counter}`
        item += 2
        counter ++
        if (myTemplate.select[1] !== "") myTemplate.select[1] = tempStr
        // if (item === includeList.length -1) break
    }

    else if (Array.isArray(includeList[item]) && includeList[item].includes("WHERE")) {
        let output = handleWhere(includeList[item])
        // if (item === includeList.length -1) break
        item += 1
    }
    else {
        myStr += includeList[item]
        item += 1
        // if (item === includeList.length -1) break
    }

    if(myTemplate.select[1] !== "") {
        finalTemplates.push(myTemplate)
        myTemplate = {...template}
        if (item === includeList.length -1) break
    }
}

