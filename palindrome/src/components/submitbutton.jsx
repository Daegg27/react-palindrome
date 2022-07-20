import InputField from "./inputfield"
import {useState} from 'react'




function SubmitButton(){

    const [palindrome, setPalindrome] = useState('')

    function GrabWord(){
        let input = document.getElementById('submit-word').value
        
        setPalindrome(input)
        
        
        if (String(input).toLowerCase().split("").reverse().join("") == String(input).toLowerCase()){
            
            return true
        }else{
            
            return false
        }
    };


    function NhungFunction(){
        let input = palindrome


        if (String(input).toLowerCase().split("").reverse().join("") == String(input).toLowerCase()){
            return (
                <h1>Lucky answer</h1>
            )
        }else if (input == ''){
            return null
        }
        else
        {
            return (
                <h1>You are wrong</h1>
            )
        }
    }
    
    return (
        <div>
        <InputField />
        <button onClick={GrabWord}>SUBMIT</button>
        {!palindrome.length == 0 && NhungFunction()}
        </div>
    )
}

export default SubmitButton