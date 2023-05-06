import { Word } from '../../../Helpers/commonInterfaces';
import { useContext } from 'react'
import { VoiceCtx } from '../../../Features/VoiceContext';
import WordRecord from '../LessonCommonFeatures/WordRecord';

interface LocProps{
  toExecises: ()=> void
  unkwonWords: Word[]
};

function PronunciationLesson(props:LocProps) {
  const voiceCtx = useContext(VoiceCtx);

  return (
    <div>
      <WordRecord {...props.unkwonWords[0]}/>
    </div>
  )
}

export default PronunciationLesson;