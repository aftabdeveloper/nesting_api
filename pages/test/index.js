import React, {useEffect, useState} from 'react';
import { Collapse } from 'antd';
const {Panel} = Collapse
import axios from "axios";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App = () => {
  const[course,setCourse] = useState([])
  const[topics,setTopics] = useState([])
  const[chapters,setChapters] = useState([])

  const onTopics = async (id) => {
        const {data} = await axios.get(`/api/course/${id}`)
        setTopics(data.topics)
  };

  const onChapters = async (id)=>{
    const {data} = await axios.get(`/api/topic/${id}`)
    setChapters(data.chapters)
    console.log(data.chapters)
  }

  useEffect(()=>{
    const req = async ()=>{
       const {data} = await axios.get("/api/course")
       setCourse(data)
    }
    req()
  },[])

  return (
    <Collapse accordion onChange={onTopics}>
      {course.map((item,index)=> (
        <Panel key={item._id} header={item.name}>
          <Collapse accordion onChange={onChapters}>
            {
                topics.map((topicItem,topicIndex)=>(
                    <Panel key={topicItem._id} header={topicItem.name}>
                        <Collapse accordion>
                            {
                                chapters.map((chapterItem,chapterIndex)=>(
                                    <Panel key={chapterItem._id} header={chapterItem.name}>
                                        testing
                                    </Panel>
                                ))                            
                            }
                        </Collapse>
                    </Panel>
                ))

            }
          </Collapse>
        </Panel>
        )
)}
    </Collapse>
  );
};

export default App;