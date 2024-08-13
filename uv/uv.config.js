/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/uv/service/chitchat/',
    //use a bare i made on vercel so i dont have to deploy shit
    bare: 'https://sunset-network-psi.vercel.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv.handler.js',
    client: '/uv.client.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
