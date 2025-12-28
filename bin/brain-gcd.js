#!/usr/bin/env node

import Game from '../src/index.js'
import { getGameRules, QuestionAndAnswer } from '../src/nod.js'

Game(getGameRules(), QuestionAndAnswer)
