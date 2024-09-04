import { Flex, Text } from "@chakra-ui/react";

const Other = () => {
    return( 
        <Flex pr={3} mt={8} w={'full'} flexDirection={"column"}>
            <Text pr={5} textAlign={'start'} fontSize={"10px"} textColor={'grey'}>
                A propos.Aide.Press.API.Emplois.Confidentiality. Conditon. Lieux. Langue. Meta Verified
            </Text>
            <Text pt={2} fontSize={"10px"} textColor={'grey'} >
            © {new Date().getFullYear()} INTEGRAM PAR META
            </Text>
        </Flex>
    )
}

export default Other;