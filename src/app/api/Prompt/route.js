import Prompt from '@/models/prompt';
import {connectionDB} from '@/utils/database';

export const GET = async(request) => {
    try {

        await connectionDB()
        
        const prompts = await Prompt.find({}).populate('creator');

        // const prompts = await Prompt.find({}.populate("creator"))
        // console.log("heello world",prompts)
        return new Response(JSON.stringify(prompts), { status: 200 })
        
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500});
    }
}