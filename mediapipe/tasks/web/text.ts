/**
 * Copyright 2022 The MediaPipe Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TextClassifier as TextClassifierImpl} from '../../tasks/web/text/text_classifier/text_classifier';
import {TextEmbedder as TextEmbedderImpl} from '../../tasks/web/text/text_embedder/text_embedder';

// Declare the variables locally so that Rollup in OSS includes them explcilty
// as exports.
const TextClassifier = TextClassifierImpl;
const TextEmbedder = TextEmbedderImpl;

export {TextClassifier, TextEmbedder};
