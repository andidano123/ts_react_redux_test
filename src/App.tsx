import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn, logOut, showLoading, hideLoading } from './actions';
import { LoginInput }  from './component/LoginInput';
import LoadingScreen from './component/LoadingScreen';
import { ClassData } from './notesReducer';
import asyncAirtable from 'airtable'
import { MainContent } from './component/MainContent';
import { generateUrl } from './generateUrl';

const base = new asyncAirtable({ apiKey: "keyFaVMo1fNANUTgn"}).base(
  "app8ZbcPx7dkpOnP0"
);
async function asyncForEach<T>(array: Array<T>, callback: (item: T, index: number) => void) {
  for (let index = 0; index < array.length; index++) {
      await callback(array[index], index);
  }
}
function App() {
  const dispatch = useDispatch()
  const onLogIn = async (note:string) => {
    dispatch(showLoading())
    const firstRes = await base('Students').select({
      fields: ['Classes'],
      filterByFormula: "{Name} = '"+note+"'",
      view: 'Grid view'
    }).firstPage();

    if(firstRes !=null && firstRes.length > 0){
    //   //Only One Record Value  -- it may be a array
      let classId: string = "";
      //It's only one record.
      firstRes.forEach(function(resClassIDs){
        classId =  (String)(resClassIDs.get("Classes"));
      });

      let showData: ClassData[] = [];      
      let classary = classId.split(',');
      
      await asyncForEach(classary, async function(oneClass){            
        const classRes = await base('Classes').find(oneClass);
        console.log(classRes.get("Name"));
        let names = "";
        let ids = String(classRes?.get("Students"));
        let stu_ary = ids.split(',');
        await asyncForEach(stu_ary, async function(oneStu, index){
          const stuRes = await base('Students').find(oneStu);          
          names = names + stuRes?.get("Name");
          if(index + 1 !== stu_ary.length)
            names = names + ", ";
        });        
        let obj: ClassData = {
          Name: String(classRes.get("Name")),
          StudentNames: names
        };                            
        showData.push(obj);       
      });
        
      console.log("finished");
      dispatch(logIn(showData))    
    }
    else{        
      alert("He/She is not in any class");
    }
    
    dispatch(hideLoading())      
    // fetchNextPage();
  
  };
  const onLogout = () => {
    dispatch(logOut())
  }  
  const urltest = generateUrl('http://testurl.bitfinx.com/', {width:360, height:360, locale:'en', toolbar_bg:'', interval:'3h', pair:'BTC_USD'});
  return (
    <>
      <div >React/Redux </div>
      <div style={{textAlign:"center"}}>URLTEST: {urltest}</div>
      <LoginInput addNote={onLogIn} />      
      <LoadingScreen />    
      <MainContent logout = {onLogout} />      
    </> 
  );
}

export default App;


