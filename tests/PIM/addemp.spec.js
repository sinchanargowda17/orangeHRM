import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json";
import { faker } from '@faker-js/faker';


const empdata = {
  emp1: { firstname: "sinchana", middlename: "r", lastname: "gowda", empid: "426340" },
  emp2: { firstname: "vandana", middlename: "H", lastname: "R", empid: "85345" },
  emp3: { firstname: "sanjana", middlename: "k", lastname: "r", empid: "678590" },
  emp4: { firstname: "uvw", middlename: "xyz", lastname: "abc", empid: "547661" },
}

for (let emp in empdata) {
  test(`test ${emp}`, async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(empdata[emp].firstname);
    await page.getByRole('textbox', { name: 'Middle Name' }).click();
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(empdata[emp].middlename);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(empdata[emp].lastname);
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill(empdata[emp].empid);
    await page.getByRole('button', { name: 'Save' }).click();
    // await page.getByText('Employee List').click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 10000 });

    // await expect(page.getByRole('heading', { name: `${empdata[emp].firstname} ` })).toBeVisible({timeout: 5000});
  });

}

const empdata1 = {
  emp1: {
    firstname: faker.person.firstName(),
    middlename: faker.person.middleName(),
    lastname: faker.person.lastName(),
    empid: faker.string.numeric(6)
  },
  emp2: {
    firstname: faker.person.firstName(),
    middlename: faker.person.middleName(),
    lastname: faker.person.lastName(),
    empid: faker.string.numeric(6)
  },
  emp3: {
    firstname: faker.person.firstName(),
    middlename: faker.person.middleName(),
    lastname: faker.person.lastName(),
    empid: faker.string.numeric(6)
  },
  emp4: {
    firstname: faker.person.firstName(),
    middlename: faker.person.middleName(),
    lastname: faker.person.lastName(),
    empid: faker.string.numeric(6)
  }
};


for (let emp1 in empdata1) {
  test(`test2 ${emp1}`, async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(empdata1[emp1].firstname);
    await page.getByRole('textbox', { name: 'Middle Name' }).click();
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(empdata1[emp1].middlename);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(empdata1[emp1].lastname);
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill(empdata1[emp1].empid);
    await page.getByRole('button', { name: 'Save' }).click();
    // await page.getByText('Employee List').click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 10000 });

    // await expect(page.getByRole('heading', { name: `${empdata1[emp1].firstname} ` })).toBeVisible({timeout: 5000});
  });

}