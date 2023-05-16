import { parse } from 'yaml'
import {join} from "node:path";
import {readFileSync} from "node:fs";
// 获取项目运行环境
export const getEnv = () => {
    return process.env.RUNNING_ENV || "dev"
}

// 读取项目配置
export const getConfig = () => {
    const environment = getEnv()
    const yamlPath = join(process.cwd(), `./.config/.${environment}.yaml`)
    const file = readFileSync(yamlPath, 'utf8')
    const config = parse(file)
    return config
}