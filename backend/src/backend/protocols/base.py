from backend.models import AddressType, ChainId


class BaseProtocol:
    def get_logo_url(self):
        raise NotImplementedError

    def get_project_url(self):
        raise NotImplementedError

    async def get_supported_chains(self):
        raise NotImplementedError

    async def get_supported_tokens(self, chain_id: ChainId):
        raise NotImplementedError

    async def get_apy(self, underlying_token_address: AddressType, chain_id: ChainId):
        raise NotImplementedError
