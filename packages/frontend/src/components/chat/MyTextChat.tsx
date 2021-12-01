import React from 'react';

import { TextChatContent } from '../../types/chat';
import { mergeClassNames } from '../../utils/style';

import styles from './Chat.module.css';

interface Props {
  dark: boolean;
  content: TextChatContent;
}
const MyTextChat: React.FC<Props> = ({ dark, content }) => (
  <div
    style={{ padding: '5px 12px' }}
    className={mergeClassNames('text-base bg-gray-200 rounded-tl-2xl rounded-tr rounded-b-2xl', styles.maxWidth)}
  >
    {content.text}
  </div>
);

export default MyTextChat;
