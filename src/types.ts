import { Tag } from "./models/tag"

export type RootStackParamList = {
  Discover: undefined
  Tag: { tag: Tag }
}
