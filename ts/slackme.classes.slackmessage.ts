import * as plugins from './slackme.plugins'

export interface IAttachmentField {
  title: string
  value: string
  short?: boolean
}

export interface IMessageOptions {
  /**
   * "Required plain-text summary of the attachment."
   */
  fallback?: string,
  /**
   * a side color
   */
  color?: string,
  /**
   * a message to show above
   */
  pretext?: string,
  /**
   * author name of the attachment
   */
  author_name?: string,
  /**
   * a link to the author
   */
  author_link?: string,
  /**
   * a string to the author
   */
  author_icon?: string,
  /**
   * a title for the attachment
   */
  title?: string,
  /**
   * a link for the title
   */
  title_link?: string,
  /**
   * the main text of the message
   */
  text?: string,
  fields?: IAttachmentField[],
  image_url?: string,
  thumb_url?: string,
  footer?: string,
  footer_icon?: string,
  /**
   * timestamp as epoch time
   */
  ts?: number
}

export class SlackMessage {
  messageOptions: IMessageOptions
  constructor(messageOptions: IMessageOptions) {
    this.messageOptions = messageOptions
  }
}
