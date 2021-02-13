import React from "react";
import { MDBTypography, MDBContainer, MDBRow, MDBCol, MDBBox } from "mdbreact";
import './HistoryContent.css'; //Import here your file style
import { ParallaxBanner } from 'react-scroll-parallax';
import { MDBMask, MDBView} from "mdbreact";

const gridExamplesPage = () => {
return (
<MDBContainer   className="">
  <MDBRow >

    <MDBCol id="historyindex" size="12" md="12">   <MDBView   className="z-depth-5" hover>

<ParallaxBanner  id="vu"
className="your-class"
layers={[
{
  image: 'https://brewminate.com/wp-content/uploads/2020/02/GeorgeThompsonTeachingHistory01-750x500.png',
  amount: 0.5,
},
{
  image: 'https://brewminate.com/wp-content/uploads/2020/02/GeorgeThompsonTeachingHistory01-750x500.png',
  amount: 0.2,
},
]}
style={{
height: '500px',
}}
>

    
    
    <MDBMask className="flex-center" overlay="green-strong">
      <p className= "text" >It is imperative to know about the past for any society in the world. It's just a simple fact that what occurs in the present, and what will occur in the future is controlled by what occured in the past. Without knowing enough of about the past circumstances and problems, we wouldn't be able to find solutions to problems that occur in time in the future such as wars or conflicts. Not knowing about the past, we would be, as it were, without an identity. We would be effectively lost in an open space of time.</p>
    </MDBMask>
    </ParallaxBanner> 
  </MDBView></MDBCol>
    
  </MDBRow>
  <MDBRow id = "definitions">
    <MDBCol size="6" md="3"> <MDBTypography note noteColor='success'>  <MDBTypography blockquote className="text-center"   >
    <p>"The bodies of knowledge about the past produced by historians, together with everything that is involved in the production, communication of, and teaching about that knowledge."</p><MDBBox tag="footer" mb={3} className="blockquote-footer">Professor Arthur Marwick
The Open University<cite title="Source Title">The Fundamentals of History</cite></MDBBox></MDBTypography></MDBTypography></MDBCol>
    <MDBCol size="6" md="3"> <MDBTypography note noteColor='success'>  <MDBTypography blockquote className="text-center">
    <p>"History is the study of change over time, and it covers all aspects of human society. Political,
social, economic, scientific, technological, medical, cultural, intellectual, religious and military
developments are all part of history. "</p><MDBBox tag="footer" mb={3} className="blockquote-footer">Valdosta State University <cite title="Source Title">History Documents</cite></MDBBox></MDBTypography></MDBTypography></MDBCol>
    <MDBCol size="6" md="3"> <MDBTypography note noteColor='success'>  <MDBTypography blockquote className="text-center">
    <p>"History is the study of the past – specifically the people, societies, events and problems of the past – as well as our attempts to understand them. It is a pursuit common to all human societies."</p><MDBBox tag="footer" mb={3} className="blockquote-footer">Alpha History<cite title="Source Title"></cite></MDBBox></MDBTypography></MDBTypography></MDBCol>
    <MDBCol size="6" md="3"> <MDBTypography note noteColor='success'>  <MDBTypography blockquote className="text-center">
    <p>"History is the study of the past. Events occurring before the invention of writing systems are considered prehistory. "History" is an umbrella term that relates to past events as well as the memory, discovery, collection, organization, presentation, and interpretation of information about these events."</p><MDBBox tag="footer" mb={3} className="blockquote-footer">Wikipedia <cite title="Source Title"></cite></MDBBox></MDBTypography></MDBTypography></MDBCol>
  </MDBRow>

  
  <MDBRow>
            <MDBCol id = "uses"  md="12"> <MDBTypography blockquote bqColor='success'>
            <MDBBox tag='p' mb={0} className='bq-title'>An excerpt for our enlightenment taken from "Why Study History? (1998)"  </MDBBox> <MDBBox tag="footer" mb={3} className="blockquote-footer">By Peter N. Stearns <cite title="Source Title"><p>from the American Historical Association</p></cite></MDBBox></MDBTypography>
          <MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>History Helps Us Understand People and Societies</MDBBox></MDBTypography>

          <p  className="historytext">In the first place, history offers a storehouse of information about how people and societies behave. Understanding the operations of people and societies is difficult, though a number of disciplines make the attempt. An exclusive reliance on current data would needlessly handicap our efforts. How can we evaluate war if the nation is at peace—unless we use historical materials? How can we understand genius, the influence of technological innovation, or the role that beliefs play in shaping family life, if we don't use what we know about experiences in the past? Some social scientists attempt to formulate laws or theories about human behavior. But even these recourses depend on historical information, except for in limited, often artificial cases in which experiments can be devised to determine how people act. Major aspects of a society's operation, like mass elections, missionary activities, or military alliances, cannot be set up as precise experiments. Consequently, history must serve, however imperfectly, as our laboratory, and data from the past must serve as our most vital evidence in the unavoidable quest to figure out why our complex species behaves as it does in societal settings. This, fundamentally, is why we cannot stay away from history: it offers the only extensive evidential base for the contemplation and analysis of how societies function, and people need to have some sense of how societies function simply to run their own lives.</p>
          
          <MDBRow>
          <MDBCol   size="12"  md="6"><MDBCol>
            <MDBView hover zoom>
              <img
                src="https://nzhistory.govt.nz/files/styles/fullsize/public/images/portugal_0.jpg?itok=JFil9940"
          
                alt=""
              />
          
         
            </MDBView>
          </MDBCol></MDBCol>

          <MDBCol   size="12"  md="6"><MDBCol>
            <MDBView hover zoom>
              <img
                src="https://riverwalkjazz.stanford.edu/sites/default/files/wp-content/uploads/2012/10/Singing_GIs.jpg"
          
                alt=""
              />
             
         
            </MDBView>
          </MDBCol></MDBCol> </MDBRow>

          <MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>History Helps Us Understand Change and How the Society We Live in Came to Be</MDBBox></MDBTypography>
<p  className="historytext">
The second reason history is inescapable as a subject of serious study follows closely on the first. The past causes the present, and so the future. Any time we try to know why something happened—whether a shift in political party dominance in the American Congress, a major change in the teenage suicide rate, or a war in the Balkans or the Middle East—we have to look for factors that took shape earlier. Sometimes fairly recent history will suffice to explain a major development, but often we need to look further back to identify the causes of change. Only through studying history can we grasp how things change; only through history can we begin to comprehend the factors that cause change; and only through history can we understand what elements of an institution or a society persist despite change.</p>

<MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>The Importance of History in Our Own Lives</MDBBox></MDBTypography>

<p  className="historytext">These two fundamental reasons for studying history underlie more specific and quite diverse uses of history in our own lives. History well told is beautiful. Many of the historians who most appeal to the general reading public know the importance of dramatic and skillful writing—as well as of accuracy. Biography and military history appeal in part because of the tales they contain. History as art and entertainment serves a real purpose, on aesthetic grounds but also on the level of human understanding. Stories well done are stories that reveal how people and societies have actually functioned, and they prompt thoughts about the human experience in other times and places. The same aesthetic and humanistic goals inspire people to immerse themselves in efforts to reconstruct quite remote pasts, far removed from immediate, present-day utility. Exploring what historians sometimes call the "pastness of the past"—the ways people in distant ages constructed their lives—involves a sense of beauty and excitement, and ultimately another perspective on human life and society.</p>

<MDBRow>
          <MDBCol   size="12"  md="6"><MDBCol>
            <MDBView hover zoom>
              <img
                src="https://www.manxgamingsolutions.com/uploads/1/1/8/8/118807775/portuguese-soldiers-17th-cent_orig.jpg"
          
                alt=""
              />

<MDBMask className="flex-center" overlay="green-strong">
                <p className="white-text">Portuguese Restoration War</p>
              </MDBMask>
                
         
            </MDBView>
          </MDBCol></MDBCol>

          <MDBCol   size="12"  md="5"><MDBCol>
            <MDBView hover zoom>
              <img
                src="https://i.pinimg.com/originals/a2/a2/d6/a2a2d6f1d51a0c1995173b1bfdad9633.png"
          
                alt=""
                
              />

<MDBMask className="flex-center" overlay="green-strong">
                <p className="white-text">Portuguese Calvary</p>
              </MDBMask>
                
         
            </MDBView>
            
          </MDBCol></MDBCol> </MDBRow>

<MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>History Contributes to Moral Understanding</MDBBox></MDBTypography>

<p  className="historytext">History also provides a terrain for moral contemplation. Studying the stories of individuals and situations in the past allows a student of history to test his or her own moral sense, to hone it against some of the real complexities individuals have faced in difficult settings. People who have weathered adversity not just in some work of fiction, but in real, historical circumstances can provide inspiration. "History teaching by example" is one phrase that describes this use of a study of the past—a study not only of certifiable heroes, the great men and women of history who successfully worked through moral dilemmas, but also of more ordinary people who provide lessons in courage, diligence, or constructive protest.</p>

<MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title' id = "provisions">History Provides Identity</MDBBox></MDBTypography>

<p  className="historytext">History also helps provide identity, and this is unquestionably one of the reasons all modern nations encourage its teaching in some form. Historical data include evidence about how families, groups, institutions and whole countries were formed and about how they have evolved while retaining cohesion. For many Americans, studying the history of one's own family is the most obvious use of history, for it provides facts about genealogy and (at a slightly more complex level) a basis for understanding how the family has interacted with larger historical change. Family identity is established and confirmed. Many institutions, businesses, communities, and social units, such as ethnic groups in the United States, use history for similar identity purposes. Merely defining the group in the present pales against the possibility of forming an identity based on a rich past. And of course nations use identity history as well—and sometimes abuse it. Histories that tell the national story, emphasizing distinctive features of the national experience, are meant to drive home an understanding of national values and a commitment to national loyalty.</p>

<MDBRow >

<MDBCol id="" size="12" md="12">   <MDBView   className="z-depth-5" hover>

<ParallaxBanner  id="vu"
className="your-class"
layers={[
{
image: 'https://www.naval-encyclopedia.com/wp-content/uploads/2018/01/BG-portuguese-navy-1024x445.jpg',
amount: 0.5,
},
{
image: 'https://www.naval-encyclopedia.com/wp-content/uploads/2018/01/BG-portuguese-navy-1024x445.jpg',
amount: 0.2,
},
]}
style={{
height: '500px',
}}
>




</ParallaxBanner> 
</MDBView></MDBCol>

</MDBRow>
<MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>Studying History Is Essential for Good Citizenship</MDBBox></MDBTypography>

<p  className="historytext">A study of history is essential for good citizenship. This is the most common justification for the place of history in school curricula. Sometimes advocates of citizenship history hope merely to promote national identity and loyalty through a history spiced by vivid stories and lessons in individual success and morality. But the importance of history for citizenship goes beyond this narrow goal and can even challenge it at some points.</p>

<p  className="historytext">History that lays the foundation for genuine citizenship returns, in one sense, to the essential uses of the study of the past. History provides data about the emergence of national institutions, problems, and values—it's the only significant storehouse of such data available. It offers evidence also about how nations have interacted with other societies, providing international and comparative perspectives essential for responsible citizenship. Further, studying history helps us understand how recent, current, and prospective changes that affect the lives of citizens are emerging or may emerge and what causes are involved. More important, studying history encourages habits of mind that are vital for responsible public behavior, whether as a national or community leader, an informed voter, a petitioner, or a simple observer.</p>

<MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>What Skills Does a Student of History Develop?</MDBBox></MDBTypography>

<p  className="historytext">What does a well-trained student of history, schooled to work on past materials and on case studies in social change, learn how to do? The list is manageable, but it contains several overlapping categories.</p>

<p  className="historytext">The Ability to Assess Evidence. The study of history builds experience in dealing with and assessing various kinds of evidence—the sorts of evidence historians use in shaping the most accurate pictures of the past that they can. Learning how to interpret the statements of past political leaders—one kind of evidence—helps form the capacity to distinguish between the objective and the self-serving among statements made by present-day political leaders. Learning how to combine different kinds of evidence—public statements, private records, numerical data, visual materials—develops the ability to make coherent arguments based on a variety of data. This skill can also be applied to information encountered in everyday life.</p>

<p  className="historytext">The Ability to Assess Conflicting Interpretations. Learning history means gaining some skill in sorting through diverse, often conflicting interpretations. Understanding how societies work—the central goal of historical study—is inherently imprecise, and the same certainly holds true for understanding what is going on in the present day. Learning how to identify and evaluate conflicting interpretations is an essential citizenship skill for which history, as an often-contested laboratory of human experience, provides training. This is one area in which the full benefits of historical study sometimes clash with the narrower uses of the past to construct identity. Experience in examining past situations provides a constructively critical sense that can be applied to partisan claims about the glories of national or group identity. The study of history in no sense undermines loyalty or commitment, but it does teach the need for assessing arguments, and it provides opportunities to engage in debate and achieve perspective.</p>

<p  className="historytext">Experience in Assessing Past Examples of Change. Experience in assessing past examples of change is vital to understanding change in society today—it's an essential skill in what we are regularly told is our "ever-changing world." Analysis of change means developing some capacity for determining the magnitude and significance of change, for some changes are more fundamental than others. Comparing particular changes to relevant examples from the past helps students of history develop this capacity. The ability to identify the continuities that always accompany even the most dramatic changes also comes from studying history, as does the skill to determine probable causes of change. Learning history helps one figure out, for example, if one main factor—such as a technological innovation or some deliberate new policy—accounts for a change or whether, as is more commonly the case, a number of factors combine to generate the actual change that occurs.</p>

<p  className="historytext">Historical study, in sum, is crucial to the promotion of that elusive creature, the well-informed citizen. It provides basic factual information about the background of our political institutions and about the values and problems that affect our social well-being. It also contributes to our capacity to use evidence, assess interpretations, and analyze change and continuities. No one can ever quite deal with the present as the historian deals with the past—we lack the perspective for this feat; but we can move in this direction by applying historical habits of mind, and we will function as better citizens in the process.</p>


<MDBRow >

<MDBCol id="" size="12" md="12">   <MDBView   className="z-depth-5" hover>

<ParallaxBanner  id="vu"
className="your-class"
layers={[
{
image: 'https://www.anratechnologies.com/home/wp-content/uploads/2016/11/history.jpg',
amount: 0.5,
},
{
image: 'https://www.anratechnologies.com/home/wp-content/uploads/2016/11/history.jpg',
amount: 0.2,
},
]}
style={{
height: '500px',
}}
>



<MDBMask className="flex-center" overlay="green-strong">
  <p className= "text" ></p>
</MDBMask>
</ParallaxBanner> 
</MDBView></MDBCol>

</MDBRow>
<MDBTypography blockquote bqColor='primary'>  <MDBBox tag='p' mb={0} className='bq-title'>History Is Useful in the World of Work</MDBBox></MDBTypography>

 <p  className="historytext">History is useful for work. Its study helps create good businesspeople, professionals, and political leaders. The number of explicit professional jobs for historians is considerable, but most people who study history do not become professional historians. Professional historians teach at various levels, work in museums and media centers, do historical research for businesses or public agencies, or participate in the growing number of historical consultancies. These categories are important—indeed vital—to keep the basic enterprise of history going, but most people who study history use their training for broader professional purposes. Students of history find their experience directly relevant to jobs in a variety of careers as well as to further study in fields like law and public administration. Employers often deliberately seek students with the kinds of capacities historical study promotes. The reasons are not hard to identify: students of history acquire, by studying different phases of the past and different societies in the past, a broad perspective that gives them the range and flexibility required in many work situations. They develop research skills, the ability to find and evaluate sources of information, and the means to identify and evaluate diverse interpretations. Work in history also improves basic writing and speaking skills and is directly relevant to many of the analytical requirements in the public and private sectors, where the capacity to identify, assess, and explain trends is essential. Historical study is unquestionably an asset for a variety of work and professional situations, even though it does not, for most students, lead as directly to a particular job slot, as do some technical fields. But history particularly prepares students for the long haul in their careers, its qualities helping adaptation and advancement beyond entry-level employment. There is no denying that in our society many people who are drawn to historical study worry about relevance. In our changing economy, there is concern about job futures in most fields. Historical training is not, however, an indulgence; it applies directly to many careers and can clearly help us in our working lives.</p>
           </MDBCol>
            
           
          </MDBRow>
  
          <MDBCol size="12" md="12">  
<MDBTypography blockquote bqColor='warning'>
<MDBBox tag='p' mb={0} id = "references" className='bq-title'>References:</MDBBox> </MDBTypography>
<p></p>
</MDBCol>

<MDBRow>
<MDBCol > <MDBTypography note noteColor='warning'>  <MDBTypography blockquote className="text-left">
<ul>
  <li><a href="https://www.historytoday.com/archive/head-head/what-history" target="_blank">What is History?</a></li>
  <li><a href="https://www.valdosta.edu/history/documents/what-is-history.pdf" target="_blank">What is History? How do Historians study the past as contrasted with Non-historians?</a></li>
  <li><a href="https://archives.history.ac.uk/history-in-focus/Whatishistory/marwick1.html" target="_blank">	The Fundamentals of History by Professor Arthur Marwick
The Open University</a></li>
  <li><a href="https://www.historians.org/about-aha-and-membership/aha-history-and-archives/historical-archives/why-study-history-(1998)" target="_blank">Why Study History? (1998) By Peter N. Stearns</a></li>
  <li><a href="https://en.wikipedia.org/wiki/History" target="_blank">History - from Wikipedia</a></li>
  <li><a href="https://alphahistory.com/what-is-history/" target="_blank">What is history? from Alpha History</a></li>
</ul>  </MDBTypography></MDBTypography></MDBCol></MDBRow>

</MDBContainer> 
);
}

export default gridExamplesPage;