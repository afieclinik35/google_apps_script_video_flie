// question
function myFunction7() {
    var question = "為什麼 GAS 不會動"
    var google_ed = UrlFetchApp.fetch("google.com/"+question)
    
    if(google_ed){
      // 在資訊界如何發問？
      skill_get("https://blog.tdccc.com.tw/252/") 
      // 提問的智慧
      skill_get("https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way") 
      
      if(skill_get_ed){
        var groud = "FB社團、TG群組、Line群組、ithome"
        ask(groud)
      }else{
        // Learn How_to_ask_questions_in_IT
      }
    }else{
      // google it
    }
  }
  