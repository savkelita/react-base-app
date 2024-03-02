import { MessageBar, MessageBarProps, MessageBarBody } from '@fluentui/react-components'

type Props = {
  intent: MessageBarProps['intent']
  content: string
}
export const MessageBarComponent: React.FunctionComponent<Props> = ({ intent, content }) => (
  <MessageBar intent={intent}>
    <MessageBarBody>{content}</MessageBarBody>
  </MessageBar>
)
