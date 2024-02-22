import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   name: string;
   phone: number;
   title: string;
   constructor(name:string,phone:number,title:string){
      this.name=name;
      this.phone=phone;
      this.title=title;
   };
   //create a class for interns that includes the name phone and title for the intern.
}; 

let newInterns: Array<Intern> = [
   new Intern("Mercy", 1111111111 , "Healer/Support"),
   new Intern("Ana", 2222222222 , "Healer/Support"),
   new Intern("ReinHeart", 3333333333 , "Tank"),
   new Intern("Soldier", 4444444444 , "Dps")
   //create an array of Interns using your class 
];

let addInterns = async (newInterns) => {
   await page.click(page.addEm); 
   await page.click(page.newEm); 
   await page.setInput(page.namInp, newInterns.name); 
   await page.setInput(page.phoInp, newInterns.phone); 
   await page.setInput(page.titleInp, newInterns.title); 
   await page.click(page.saveBtn); 
   await page.driver.sleep(5000);
   //create a function to add the interns from your array
};

test('can add the bake off crew',async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})