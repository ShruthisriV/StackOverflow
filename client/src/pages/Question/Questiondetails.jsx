import React,{useState} from 'react';
import moment from 'moment';
import copy from "copy-to-clipboard";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import './Question.css';
import Avatar from "../../Component/Avatar/Avatar";
import Displayanswer from './Displayanswer';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';

const Questiondetails = () => {
    const [answer, setanswer] = useState("");
    const questionlist = [{
        "_id":"q1",
        "questiontitle": "How to implement a binary search algorithm in Python?",
        "questionbody": "I am trying to implement a binary search algorithm in Python but I am stuck. Can someone provide a simple example",
        "questiontags": ["Python", "Algorithms", "Binary Search"],
        "noofanswers": 2,
        "upvote": ["user123", "user456"],
        "downvote": ["user789"],
        "userposted": "codeNewbie",
        "userid": "u12345",
        "askedon": "2024-06-10T12:00:00Z",
        "answer": [
            {
                "answerbody": "Here's a simple example of a binary search algorithm in Python:\n python:\ndef binary_search(arr, x):\n",
                "useranswered": "algoExpert",
                "userid": "u67890",
                "answeredon": "2024-06-10T13:00:00Z",
            },{
                "answerbody": "To add to the previous answer, remember that the array needs to be sorted for binary search to work.",
                "useranswered": "techGuru",
                "userid": "u11223",
                "answeredon": "2024-06-10T14:00:00Z"
            }
        ]
    },
    {
        "_id":"q2",
        "questiontitle": "What is the best way to handle state in a React application?",
        "questionbody": "I've been learning React and I am confused about the different ways to manage state.",
        "questiontags": ["React", "JavaScript", "State Management"],
        "noofanswers": 1,
        "upvote": ["user111", "user222", "user333"],
        "downvote": [],
        "userposted": "reactRookie",
        "userid": "u54321",
        "askedon": "2024-06-10T09:30:00Z",
        "answer": [
            {
                "answerbody": "The main ways to handle state in React are using the `useState` hook for local component state and `useReducer`",
                "useranswered": "reactMaster",
                "userid": "u98765",
                "answeredon": "2024-06-10T10:00:00Z"
            }
        ]
    },
    {
        "_id":"q3",
        "questiontitle": "What are the differences between SQL and NoSQL databases?",
        "questionbody": "Can someone explain the main differences between SQL and NoSQL databases, and in what scenarios each should be used?",
        "questiontags": ["Databases", "SQL", "NoSQL"],
        "noofanswers": 3,
        "upvote": ["user555", "user666"],
        "downvote": ["user777"],
        "userposted": "dataLearner",
        "userid": "u13579",
        "askedon": "2024-06-10T15:45:00Z",
        "answer": [
            {
                "answerbody": "SQL databases are relational, table-based databases that use structured query language (SQL)",
                "useranswered": "dbExpert",
                "userid": "u24680",
                "answeredon": "2024-06-10T16:30:00Z"
            },{
                "answerbody": "Use SQL databases when you need ACID compliance and complex querying capabilities.",
                "useranswered": "techSavvy",
                "userid": "u97531",
                "answeredon": "2024-06-10T17:00:00Z"
            },{
                "answerbody": "Additionally, SQL databases are best for applications that require multi-row transactions.",
                "useranswered": "dataGuru",
                "userid": "u86420",
                "answeredon": "2024-06-10T18:00:00Z"
            }
        ]
    }]

    const { id } = useParams();
    const user = null;
    const location = useLocation();
    const navigate = useNavigate();
    const url = "http://localhost:3000"
    const handlepostans=(e, answerlength) => {
        e.preventDefault();
        if(user === null){
            alert("Login or Signup to answer a question");
            navigate('/Auth')
        }else{
            if(answer === ""){
                alert("Enter an answer before submitting")
            }else{
                setanswer("")
            }
        }
    }

    const handleshare=()=>{
        copy(url + location.pathname);
        alert("Copied url :" + url + location.pathname)
    }

    const handledelete=()=>{

    }

    const handleupvote=()=>{
        if(user===null){
            alert("Login or Signup to answer a question")
            navigate('/Auth')
        }
    }

    const handledownvote=()=>{
        if(user===null){
            alert("Login or Signup to answer a question")
            navigate('/Auth')
        }
    }

  return (
    <>
        <div className="question-details-page">
            {questionlist===null ? (
                <h1>Loading...</h1>
            ):(
                <>
                    {questionlist.filter((question)=>question._id===id).map((question)=>(
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questiontitle}</h1>
                                <div className="question-details-container-2">
                                    <div className='question-votes'>
                                        <img src={upvote} alt="" width={18} className='votes-icon' onClick={handleupvote}/>
                                        <p>{question.upvote.length-question.downvote.length}</p>
                                        <img src={downvote} alt="" width={18} className='votes-icon' onClick={handledownvote}/>
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <p className="question-body">
                                            {question.questionbody}
                                        </p>
                                        <div className="question-details-tags">
                                            {question.questiontags.map((tag)=> (
                                                <p key={tag}>{tag}</p>
                                            ))}
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleshare}>
                                                    Share
                                                </button>
                                                {user?.result?._id === question?.userid && (
                                                    <button type='button' onClick={handledelete}>Delete</button>
                                                )}
                                            </div>
                                            <div>
                                                <p>Asked {moment(question.askedon).fromNow()}</p>
                                                <Link to={`Users/${question.userid}`} className='user-link' style={{color: "#0086d8"}}>
                                                    <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                                                        {question.userposted.charAt(0).toUpperCase()}
                                                    </Avatar>
                                                    <div>{question.userposted}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {question.noofanswers!==0 && (
                                <section>
                                    <h3>{question.noofanswers} Answers</h3>
                                    <Displayanswer key={question._id} question={question} handleshare={handleshare}/>
                                </section>
                            )}
                            <section className="post-ans-container">
                                <h3>Your Answer</h3>
                                <form onSubmit={(e)=>{
                                    handlepostans(e, question.answer.length)
                                }}>
                                    <textarea name="" id="" cols="30" rows="10" value={answer} onChange={(e)=>setanswer(e.target.value)}></textarea>
                                    <br/>
                                    <input type="submit" className="post-ans-btn" value="Post your answer"/>
                                </form>
                                <p>Browse other Question tagged
                                    {question.questiontags.map((tag)=>(
                                        <Link to="Tags" key={tag} className='ans-tag'>
                                            {" "}
                                            {tag}{" "}
                                        </Link>
                                    ))}{" "}
                                    or
                                    <Link to="/Askquestion" style={{textDecoration:"none", color: "#009dff"}}>
                                        {" "}
                                        Ask your own question
                                    </Link>
                                </p>
                            </section>
                        </div>
                    ))}
                </>
            )}
        </div>
    </>
  )
}

export default Questiondetails