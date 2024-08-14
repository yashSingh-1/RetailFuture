interface Props {
    userID: string,
    ParentProductId: string
}

export const GenerateLink = ({
    userID,
    ParentProductId
}: Props) => {
    const GeneratedLinkSchema = `/affiliate/${userID}${ParentProductId}`
    return GeneratedLinkSchema;
}