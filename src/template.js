class Template {
  constructor(employees) {
    this.employees = employees;
    this.isEmployee = "";
  }
  generateHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/898ca0ca4a.js" crossorigin="anonymous"></script>
    <title>Profile Team</title>
</head>
<body class="bg-gray-200">
    <div class="flex items-center justify-center bg-red-500 h-32">
        <div class="flex justify-center">
            <h1 class="text-center text-4xl text-white font-bold">My Team</h1>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="mt-3 flex flex-wrap justify-center">
            ${this.employees
              .map((employee) => {
                return `<!-- Card -->
                <div class="p-1 w-full sm:w-6/12 lg:w-4/12 xl:w-3/12">
                    <div class="flex flex-col h-full bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                        <div class="bg-blue-500 p-7 text-white">
                            <h2 class="text-3xl font-bold tracking-wide">
                            ${employee.name}
                            </h2>
                            <h3 class="text-xl">
                                ${
                                  employee.getRole() === "Manager"
                                    ? `<i class="fa-solid fa-mug-hot"></i>`
                                    : employee.getRole() === "Engineer"
                                    ? `<i class="fa-solid fa-glasses"></i>`
                                    : `<i class="fa-solid fa-user-graduate"></i>`
                                } ${employee.role}
                            </h3>
                        </div>
                        <div class="p-5">
                            <p class="p-5 bg-white rounded-lg mb-1 border shadow">
                                ID: ${employee.id}
                            </p>
                            <p class="p-5 bg-white rounded-lg mb-1 border shadow">
                                Email: <a class="text-blue-500" href="mailto:${
                                  employee.email
                                }">${employee.email}</a>
                            </p>
                            ${
                              employee.getRole() === "Manager"
                                ? `<p class="p-5 bg-white rounded-lg mb-1 border shadow">
                            Office number: ${employee.officeNumber}
                        </p >`
                                : employee.getRole() === "Engineer"
                                ? `<p class="p-5 bg-white rounded-lg mb-1 border shadow">
                        Github: <a class="text-blue-500" target="_blank" href="https://github.com/${employee.github}">${employee.github}</a>
                    </p >`
                                : `<p class="p-5 bg-white rounded-lg mb-1 border shadow">
                    School: ${employee.school}
                </p >`
                            }
            
                        </div>
                    </div>
                </div>
                <!-- End Card -->`;
              })
              .join(" ")}
            
    </div>

</body>
</html>
            `;
  }
}

module.exports = Template;
