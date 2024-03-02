import { Spinner, SpinnerProps } from '@fluentui/react-components'

type Props = {
  label: SpinnerProps['label']
}
export const SpinnerComponent: React.FunctionComponent<Props> = ({ label }) => <Spinner label={label} />
