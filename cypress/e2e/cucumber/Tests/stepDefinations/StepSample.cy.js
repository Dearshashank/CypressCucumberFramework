///<reference types="cypress"/>
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import sam from '../../Page/SamplePage.cy';

Given("Landed to webpage",()=>{
sam.Openweb();
})
When("Enter Username and password",()=>{
sam.Enterlogins();
})

Then("I am able to login to website",()=>{
sam.CheckLogin();
})