---
title: Why AI Video Sometimes Gets It Backwards为什么人工智能视频有时会出错
slug: >-
  why-ai-video-sometimes-gets-it-backwards-why-ai-videos-sometimes-gets-it-backwards-zrash3
url: >-
  /post/why-ai-video-sometimes-gets-it-backwards-why-ai-videos-sometimes-gets-it-backwards-zrash3.html
date: '2025-03-19 20:22:32+08:00'
lastmod: '2025-03-19 20:22:58+08:00'
toc: true
isCJKLanguage: true
---





If 2022 was the year that generative AI captured a wider public's imagination, 2025 is the year where the new breed of generative **video** frameworks coming from China seems set to do the same.  
如果说 2022 年是生成式人工智能吸引更广泛公众想象力的一年，那么 2025 年似乎将是来自中国的新一代生成**视频**框架也将产生同样效果的一年。

Tencent's Hunyuan Video has made a [major impact](https://www.unite.ai/the-rise-of-hunyuan-video-deepfakes/) on the hobbyist AI community with its open-source release of a full-world video diffusion model that users can [tailor to their needs](https://www.unite.ai/how-to-train-and-use-hunyuan-video-lora-models/).  
腾讯混元视频开源发布全世界视频传播模型，用户可以[根据自身需求进行定制](https://www.unite.ai/how-to-train-and-use-hunyuan-video-lora-models/)，对业余人工智能社区产生了[重大影响](https://www.unite.ai/the-rise-of-hunyuan-video-deepfakes/)。

Close on its heels is Alibaba's more recent [Wan 2.1](https://github.com/Wan-Video/Wan2.1), one of the most powerful image-to-video FOSS solutions of this period – now supporting customization through [Wan LoRAs](https://github.com/kohya-ss/musubi-tuner/blob/main/docs/wan.md).  
紧随其后的是阿里巴巴最新推出的[Wan 2.1](https://github.com/Wan-Video/Wan2.1) ，这是本时期最强大的图像到视频 FOSS 解决方案之一 - 现在支持通过[Wan LoRA](https://github.com/kohya-ss/musubi-tuner/blob/main/docs/wan.md)进行定制。

Besides the availability of recent human-centric foundation model [SkyReels](https://github.com/SkyworkAI/SkyReels-V1), at the time of writing we also await the release of Alibaba's comprehensive [VACE](https://arxiv.org/pdf/2503.07598) video creation and editing suite:  
除了最近推出的以人为本的基础模型[SkyReels](https://github.com/SkyworkAI/SkyReels-V1)之外，在撰写本文时，我们还在等待阿里巴巴全面的[VACE](https://arxiv.org/pdf/2503.07598)视频创建和编辑套件的发布：

[https://www.unite.ai/wp-content/uploads/2025/03/VACE_edit2_20250313_104839_noaudio.mp4](https://www.unite.ai/wp-content/uploads/2025/03/VACE_edit2_20250313_104839_noaudio.mp4)

******Click to play. ****The pending release of Alibaba's multi-function AI-editing suite VACE has excited the user community. **Source: https://ali-vilab.github.io/VACE-Page/  
******点击播放。******​**阿里巴巴即将发布的多功能人工智能编辑套件 VACE 让用户社区兴奋不已。** 来源：https://ali-vilab.github.io/VACE-Page/

## **Sudden Impact

突如其来的冲击**

The generative video AI research scene itself is no less explosive; it's still the first half of March, and Tuesday's submissions to Arxiv's Computer Vision section \(a hub for generative AI papers\) came to nearly 350 entries – a figure more associated with the height of conference season.  
生成视频 AI 研究领域本身也同样具有爆炸性。现在还是三月上半月，周二提交给 Arxiv 计算机视觉部分（生成 AI 论文的中心）的论文数量已接近 350 篇 —— 这个数字与会议季的高峰期更为相关。

The two years since the [launch](https://www.unite.ai/three-challenges-ahead-for-stable-diffusion/) of Stable Diffusion in summer of 2022 \(and the subsequent development of [Dreambooth](https://www.unite.ai/the-damage-from-fine-tuning-an-ai-model-can-easily-be-recovered-research-finds/) and [LoRA](https://www.unite.ai/towards-loras-that-can-survive-model-version-upgrades/) customization methods\) have been characterized by the lack of further major developments, until the last few weeks, where new releases and innovations have proceeded at such a breakneck pace that it is almost impossible to keep apprised of it all, much less cover it all.  
自 2022 年夏季[推出](https://www.unite.ai/three-challenges-ahead-for-stable-diffusion/)Stable Diffusion（以及随后开发[Dreambooth](https://www.unite.ai/the-damage-from-fine-tuning-an-ai-model-can-easily-be-recovered-research-finds/)和[LoRA](https://www.unite.ai/towards-loras-that-can-survive-model-version-upgrades/)定制方法）以来的两年里，一直没有进一步的重大发展，直到最近几周，新版本和创新才以如此惊人的速度进行，几乎不可能随时了解所有内容，更不用说涵盖所有内容了。

Video diffusion models such as Hunyuan and Wan 2.1 have solved, at long last, and after years of failed efforts from hundreds of research initiatives, the [problem](https://www.unite.ai/how-stable-diffusion-could-develop-as-a-mainstream-consumer-product/) of [temporal consistency](https://www.unite.ai/why-cant-generative-video-systems-make-complete-movies/) as it relates to the generation of  humans, and largely also to environments and objects.  
经过数百项研究计划多年的失败努力，浑元和万 2.1 等视频传播模型终于解决了与人类生成以及很大程度上与环境和物体相关的[时间一致性](https://www.unite.ai/why-cant-generative-video-systems-make-complete-movies/)​[问题](https://www.unite.ai/how-stable-diffusion-could-develop-as-a-mainstream-consumer-product/)。

There can be little doubt that VFX studios are currently applying staff and resources to adapting the new Chinese video models to solve immediate challenges such as face-swapping, despite the current lack of [ControlNet](https://github.com/lllyasviel/ControlNet)-style ancillary mechanisms for these systems.  
毫无疑问，尽管目前这些系统缺乏[ControlNet](https://github.com/lllyasviel/ControlNet)式的辅助机制，但视觉特效工作室目前正在投入人员和资源来适应新的中国视频模型，以解决诸如换脸等眼前挑战。

It must be such a relief that one such significant obstacle has potentially been overcome, albeit not through the avenues anticipated.  
尽管并非通过预期的途径，但如此重大的障碍有可能被克服，这一定令人感到欣慰。

Of the problems that remain, this one, however, is not insignificant:  
然而，在仍然存在的问题中，有这个问题并不小：

[https://www.unite.ai/wp-content/uploads/2025/03/0-Wan2.1-rock-uphill.mp4](https://www.unite.ai/wp-content/uploads/2025/03/0-Wan2.1-rock-uphill.mp4)

******Click to play. ********Based on the prompt ‘A small rock tumbles down a steep, rocky hillside, displacing soil and small stones ‘, Wan 2.1, which achieved the very highest scores in the new paper, makes one simple error.******   ****Source: https://videophy2.github.io/****​**********点击播放。**********​**根据提示“一块小石头从陡峭的岩石山坡上滚落，将土壤和小石头移位”，在新论文中取得最高分的 Wan 2.1 犯了一个简单的错误。** 来源：https://videophy2.github.io/

## **Up The Hill Backwards

倒着上山**

All text-to-video and image-to-video systems currently available, including commercial closed-source models, have a tendency to produce physics bloopers such as the one above, where the video shows a rock rolling **uphill**, based on the prompt ‘**A small rock tumbles down a steep, rocky hillside, displacing soil and small stones**  ****‘.目前所有可用的文本转视频和图像转视频系统，包括商业闭源模型，都有可能产生类似上述物理失误，视频显示一块石头滚****​**上山**，其依据的是提示“**一块小石头从陡峭的岩石山坡上滚落，移开了土壤和小石头**”。

One theory as to why this happens, [recently proposed](https://www.unite.ai/even-state-of-the-art-language-models-struggle-to-understand-temporal-logic/) in an academic collaboration between Alibaba and UAE, is that models train always on single images, in a sense, even when they're training on videos \(which are written out to single-frame sequences for  training purposes\); and they may not necessarily learn the correct temporal order of  **‘before'**  ****and****   ******‘after'******   ****pictures.关于为什么会发生这种情况，阿里巴巴和阿联酋****​****[最近在一次学术合作中提出了](https://www.unite.ai/even-state-of-the-art-language-models-struggle-to-understand-temporal-logic/)****​****一种理论，即从某种意义上说，模型总是在单个图像上进行训练，即使是在视频上进行训练（为了训练目的，视频被写成单帧序列）；而且它们不一定能学习****​ **“之前”** 和 **“之后”** 图片的正确时间顺序。

However, the most likely solution is that the models in question have used [data augmentation](https://archive.ph/4NM6i#dataaugmentation) routines that involve exposing a source training clip to the model both forwards **and** backwards, effectively doubling the training data.  
然而，最有可能的解决方案是，所讨论的模型使用了[数据增强](https://archive.ph/4NM6i#dataaugmentation)程序，其中包括将源训练剪辑向前**和**向后暴露给模型，从而有效地使训练数据加倍。

It has long been known that this shouldn't be done arbitrarily, because some movements work in reverse, but many do not. A [2019 study](https://arxiv.org/abs/1909.09422) from the UK's University of Bristol sought to develop a method that could distinguish **equivariant**, **invariant** and **irreversible** source data video clips that co-exist in a single dataset \(see image below\), with the notion that unsuitable source clips might be filtered out from data augmentation routines.  
人们早就知道，这种做法不能随意进行，因为有些动作是反向的，但很多动作不是。英国布里斯托大学[2019 年的一项研究](https://arxiv.org/abs/1909.09422)试图开发一种方法，可以区分单个数据集中共存的**等变**、**不变**和**不可逆**源数据视频片段（见下图），其理念是可以从数据增强程序中过滤掉不合适的源片段。

![Examples of three types of movement, only one of which is freely reversible while maintaining plausible physical dynamics. Source: https://arxiv.org/abs/1909.09422](https://www.unite.ai/wp-content/uploads/2025/03/augmentation.jpg)*Examples of three types of movement, only one of which is freely reversible while maintaining plausible physical dynamics.*  Source: https://arxiv.org/abs/1909.09422  
*三种运动类型的示例，其中只有一种可以自由逆转，同时保持合理的物理动力学。* 来源：https://arxiv.org/abs/1909.09422

The authors of that work frame the problem clearly:  
该作品的作者明确阐述了这个问题：

 **‘We find the realism of reversed videos to be betrayed by reversal artefacts, aspects of the scene that would not be possible in a natural world. Some artefacts are subtle, while others are easy to spot, like a reversed ‘throw’ action where the thrown object spontaneously rises from the floor.“我们发现反转视频的真实感被反转伪影所背叛，这些场景在自然世界中不可能出现。有些伪影很微妙，而有些则很容易发现，比如反转的“投掷”动作，投掷的物体会自发地从地板上升起。**

 **‘We observe two types of reversal artefacts, physical, those exhibiting violations of the laws of nature, and improbable, those depicting a possible but unlikely scenario. These are not exclusive, and many reversed actions suffer both types of artefacts, like when uncrumpling a piece of paper.“我们观察到两种类型的逆转伪影，一种是物理的，它们表现出违反自然法则的行为，另一种是不可能发生的，它们描绘了一种可能但不太可能发生的情景。这些并不相互排斥，许多逆转动作都会遭受这两种类型的伪影，比如在展开一张纸时。**

 **‘Examples of physical artefacts include: inverted gravity**  **(e.g. ‘dropping something’), spontaneous impulses on objects**  **(e.g. ‘spinning a pen’), and irreversible state changes**  **(e.g. ‘burning a candle’). An example of an improbable artefact: taking a plate from the cupboard, drying it, and placing it on the drying rack.“物理人工制品的例子包括：重力倒置（例如‘掉落某物’）、物体上的自发脉冲（例如‘旋转一支笔’）和不可逆的状态变化（例如‘点燃一支蜡烛’）。一个不可能人工制品的例子：从橱柜里拿出一个盘子，擦干它，然后把它放在干燥架上。**

 **‘This kind of re-use of data is very common at training time, and can be beneficial – for example, in making sure that the model does not learn only one view of an image or object which can be flipped or rotated without losing its central coherency and logic.“这种数据重复使用在训练时非常常见，并且可能带来好处——例如，确保模型不会只学习图像或物体的一个视图，而这些视图可以在不失去其中心连贯性和逻辑的情况下被翻转或旋转。**

 **‘This only works for objects that are truly symmetrical, of course; and learning physics from a ‘reversed' video only works if the reversed version makes as much sense as the forward version.'“当然，这只适用于真正对称的物体；并且，只有当反转版本与正转版本一样有意义时，从‘反转’视频中学习物理才有效。”**

## **Temporary Reversals

暂时撤销**

We don't have any evidence that systems such as Hunyuan Video and Wan 2.1 allowed arbitrarily ‘reversed' clips to be exposed to the model during training \(neither group of researchers has been specific regarding data augmentation routines\).  
我们没有任何证据表明浑元视频和 Wan 2.1 等系统允许在训练期间将任意“反转”的剪辑暴露给模型（两组研究人员都没有具体说明数据增强程序）。

Yet the only reasonable alternative possibility, in the face of [so many reports](https://old.reddit.com/r/HunyuanVideo/comments/1iaoebw/videos_running_backwards/) \(and my own practical experience\), would seem to be that hyperscale datasets powering these model may contain clips that [actually feature movements occurring in reverse](https://www.youtube.com/playlist?list=PLndfEMRm03EWYHL_O27owI0qjhE1H0nQ5).  
然而，面对[如此多的报告](https://old.reddit.com/r/HunyuanVideo/comments/1iaoebw/videos_running_backwards/)（以及我自己的实际经验），唯一合理的替代可能性似乎是，支持这些模型的超大规模数据集可能包含[实际上以反向发生的运动为特征的](https://www.youtube.com/playlist?list=PLndfEMRm03EWYHL_O27owI0qjhE1H0nQ5)剪辑。

The rock in the example video embedded above was generated using Wan 2.1, and features in a new study that examines how well video diffusion models handle physics.  
上面嵌入的示例视频中的岩石是使用 Wan 2.1 生成的，并在一项研究视频扩散模型如何处理物理问题的新研究中出现。

In tests for this project, Wan 2.1 achieved a score of only 22% in terms of its ability to consistently adhere to physical laws.  
在该项目的测试中，Wan 2.1 在始终遵循物理定律的能力方面仅取得了 22% 的分数。

However, that's the **best** score of any system tested for the work, indicating that we may have found our next stumbling block for video AI:  
然而，这是所有经过测试的系统中**最好的**分数，这表明我们可能已经找到了视频 AI 的下一个绊脚石：

![Scores obtained by leading open and closed-source systems, with the output of the frameworks evaluated by human annotators. Source: https://arxiv.org/pdf/2503.06800](https://www.unite.ai/wp-content/uploads/2025/03/videophy-2-results.jpg)*Scores obtained by leading open and closed-source systems, with the output of the frameworks evaluated by human annotators.*  Source: https://arxiv.org/pdf/2503.06800  
*领先的开源和闭源系统获得的分数，框架的输出由人工注释者评估。* 来源：https://arxiv.org/pdf/2503.06800

The authors of the new work have developed a benchmarking system, now in its second iteration, called **VideoPhy**, with the code [available at GitHub](https://github.com/Hritikbansal/videophy/tree/main/VIDEOPHY2).  
这项新研究的作者开发了一个基准测试系统，目前已是第二次迭代，名为**VideoPhy** ，其代码[可在 GitHub 上找到](https://github.com/Hritikbansal/videophy/tree/main/VIDEOPHY2)。

Though the scope of the work is beyond what we can comprehensively cover here, let's take a general look at its methodology, and its potential for establishing a metric that could help steer the course of future model-training sessions away from these bizarre instances of reversal.  
虽然这项工作的范围超出了我们在这里可以全面涵盖的范围，但让我们总体看一下它的方法，以及建立一个指标的潜力，该指标可以帮助引导未来的模型训练过程远离这些奇怪的逆转情况。

The [study](https://arxiv.org/pdf/2503.06800), conducted by six researchers from UCLA and Google Research, is called **VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation**. A crowded accompanying [project site](https://videophy2.github.io/) is also available, along with code and datasets [at GitHub](https://github.com/Hritikbansal/videophy/tree/main/VIDEOPHY2), and a dataset viewer [at Hugging Face](https://huggingface.co/datasets/videophysics/videophy2_test).  
这项[研究](https://arxiv.org/pdf/2503.06800)由来自加州大学洛杉矶分校和谷歌研究院的六名研究人员共同开展，名为**VideoPhy-2：视频生成中具有挑战性的以动作为中心的物理常识评估**。该[项目还提供了一个内容丰富的配套网站](https://videophy2.github.io/)，以及[GitHub 上的](https://github.com/Hritikbansal/videophy/tree/main/VIDEOPHY2)代码和数据集，以及[Hugging Face 上的](https://huggingface.co/datasets/videophysics/videophy2_test)数据集查看器。

[https://www.unite.ai/wp-content/uploads/2025/03/0-Sora_lake.mp4](https://www.unite.ai/wp-content/uploads/2025/03/0-Sora_lake.mp4)

******Click to play. ********Here, the feted OpenAI Sora model fails to understand the interactions between oars and reflections, and is not able to provide a logical physical flow either for the person in the boat or the way that the boat interacts with her.******​**********点击播放。**********​**在这里，备受推崇的 OpenAI Sora 模型无法理解桨和反射之间的相互作用，无法为船上的人或船与人互动的方式提供合乎逻辑的物理流程。**

## **Method

方法**

The authors describe the latest version of their work, **VideoPhy-2**, as a ‘challenging commonsense evaluation dataset for real-world actions.' The collection features 197 actions across a range of diverse physical activities such as **hula-hooping**, **gymnastics** and **tennis**, as well as object interactions, such as **bending an object until it breaks**.  
作者将他们最新推出的**VideoPhy-2**描述为“针对现实世界动作的具有挑战性的常识性评估数据集”。该数据集涵盖了 197 种动作，涵盖了各种体育活动，例如**呼啦圈**、**体操**和**网球**，以及物体交互，例如**弯曲物体直至其断裂**。

A large language model \(LLM\) is used to generate 3840 prompts from these seed actions, and the prompts are then used to synthesize videos via the various frameworks being trialed.  
大型语言模型 \(LLM\) 用于从这些种子操作生成 3840 个提示，然后使用这些提示通过正在试用的各种框架合成视频。

Throughout the process the authors have developed a list of ‘candidate' physical rules and laws that AI-generated videos should satisfy, using vision-language models for evaluation.  
在整个过程中，作者使用视觉语言模型进行评估，制定了人工智能生成的视频应该满足的“候选”物理规则和定律列表。

The authors state:  
作者指出：

 **‘For example, in a video of sportsperson playing tennis, a physical rule would be that a tennis ball should follow a parabolic trajectory under gravity. For gold-standard judgments, we ask human annotators to score each video based on overall semantic adherence and physical commonsense, and to mark its compliance with various physical rules.'“例如，在运动员打网球的视频中，物理规则是网球在重力作用下应遵循抛物线轨迹。为了做出黄金标准判断，我们要求人类注释者根据整体语义遵循度和物理常识对每个视频进行评分，并标记其是否符合各种物理规则。”**

![Above: A text prompt is generated from an action using an LLM and used to create a video with a text-to-video generator. A vision-language model captions the video, identifying possible physical rules at play. Below: Human annotators evaluate the video’s realism, confirm rule violations, add missing rules, and check whether the video matches the original prompt.](https://www.unite.ai/wp-content/uploads/2025/03/videophy-2-conceptual-schema.jpg)*Above: A text prompt is generated from an action using an LLM and used to create a video with a text-to-video generator. A vision-language model captions the video, identifying possible physical rules at play. Below: Human annotators evaluate the video’s realism, confirm rule violations, add missing rules, and check whether the video matches the original prompt.上图：使用 LLM 从操作生成文本提示，并使用文本转视频生成器创建视频。视觉语言模型为视频添加字幕，识别可能起作用的物理规则。下图：人工注释者评估视频的真实性，确认规则违规，添加缺失的规则，并检查视频是否与原始提示相符。*

Initially the researchers curated a set of actions to evaluate physical commonsense in AI-generated videos. They began with over 600 actions sourced from the [Kinetics](https://arxiv.org/abs/1808.01340), [UCF-101](https://arxiv.org/abs/1212.0402), and [SSv2](https://openaccess.thecvf.com/content_ICCV_2017/papers/Goyal_The_Something_Something_ICCV_2017_paper.pdf) datasets, focusing on activities involving sports, object interactions, and real-world physics.  
最初，研究人员精心挑选了一组动作来评估 AI 生成的视频中的物理常识。他们从[Kinetics](https://arxiv.org/abs/1808.01340) 、 [UCF-101](https://arxiv.org/abs/1212.0402)和[SSv2](https://openaccess.thecvf.com/content_ICCV_2017/papers/Goyal_The_Something_Something_ICCV_2017_paper.pdf)数据集中选取了 600 多个动作，重点关注涉及运动、物体交互和现实世界物理的活动。

Two independent groups of STEM-trained student annotators \(with a minimum undergraduate qualification obtained\) reviewed and filtered the list, selecting actions that tested principles such as *gravity*, *momentum*, and *elasticity*, while removing low-motion tasks such as **typing**, **petting a cat**, or **chewing**.  
两个独立的、接受过 STEM 培训的学生注释者小组（至少获得本科学历）审查并筛选了该列表，选择了测试*重力*、*动量*和*弹性*等原理的动作，同时删除了**打字**、**抚摸猫**或**咀嚼**等低运动任务。

After further refinement with [Gemini-2.0-Flash-Exp](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/) to eliminate duplicates, the final dataset included 197 actions, with 54 involving object interactions and 143 centered on physical and sports activities:  
在使用[Gemini-2.0-Flash-Exp](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/)进一步细化以消除重复后，最终数据集包含 197 个动作，其中 54 个涉及物体交互，143 个以身体和体育活动为中心：

![Samples from the distilled actions.](https://www.unite.ai/wp-content/uploads/2025/03/action-examples-videophy.jpg)*Samples from the distilled actions.从提炼的动作中得到的样本。*

In the second stage, the researchers used Gemini-2.0-Flash-Exp to generate 20 prompts for each action in the dataset, resulting in a total of 3,940 prompts. The generation process focused on visible physical interactions that could be clearly represented in a generated video. This excluded non-visual elements such as **emotions**, **sensory details**, and **abstract language**, but incorporated diverse characters and objects.  
在第二阶段，研究人员使用 Gemini-2.0-Flash-Exp 为数据集中的每个动作生成 20 个提示，总共得到 3,940 个提示。生成过程侧重于可见的身体互动，这些互动可以在生成的视频中清晰呈现。这排除了**情绪**、**感官细节**和**抽象语言**等非视觉元素，但融入了多样化的角色和物体。

For example, instead of a simple prompt like ‘**An archer releases the arrow'** , the model was guided to produce a more detailed version such as  **‘An archer draws the bowstring back to full tension, then releases the arrow, which flies straight and strikes a bullseye on a paper target**‘.  
例如，与“**弓箭手射出箭”** 这样简单的提示不同，模型被引导产生更详细的版本，如 **“弓箭手将弓弦拉回至完全绷紧状态，然后射出箭，箭笔直飞行并击中纸靶上的靶心**”。

Since modern video models can interpret longer descriptions, the researchers further refined the captions using the [Mistral-NeMo-12B-Instruct](https://build.nvidia.com/nv-mistralai/mistral-nemo-12b-instruct) prompt upsampler, to add visual details without altering the original meaning.  
由于现代视频模型可以解释更长的描述，研究人员使用[Mistral-NeMo-12B-Instruct](https://build.nvidia.com/nv-mistralai/mistral-nemo-12b-instruct)提示上采样器进一步细化了字幕，以添加视觉细节而不改变原始含义。

![Sample prompts from VideoPhy-2, categorized by physical activities or object interactions. Each prompt is paired with its corresponding action and the relevant physical principle it tests.](https://www.unite.ai/wp-content/uploads/2025/03/table-11.jpg)*Sample prompts from VideoPhy-2, categorized by physical activities or object interactions. Each prompt is paired with its corresponding action and the relevant physical principle it tests.VideoPhy-2 的示例提示，按身体活动或物体交互分类。每个提示都与其相应的动作和它测试的相关物理原理配对。*

For the third stage, physical rules were not derived from text prompts but from generated videos, since generative models can struggle to adhere to conditioned text prompts.  
对于第三阶段，物理规则不是来自文本提示，而是来自生成的视频，因为生成模型很难遵守条件文本提示。

Videos were first created using VideoPhy-2 prompts, then ‘up-captioned' with Gemini-2.0-Flash-Exp to extract key details. The model proposed three expected physical rules per video, which human annotators reviewed and expanded by identifying additional potential violations.  
视频首先使用 VideoPhy-2 提示创建，然后使用 Gemini-2.0-Flash-Exp 进行“上行字幕”以提取关键细节。该模型为每个视频提出了三条预期的物理规则，人工注释者通过识别其他潜在违规行为来审查和扩展这些规则。

![Examples from the upsampled captions.](https://www.unite.ai/wp-content/uploads/2025/03/table-12.jpg)*Examples from the upsampled captions.来自上采样字幕的示例。*

Next, to identify the most challenging actions, the researchers generated videos using [CogVideoX-5B](https://arxiv.org/abs/2408.06072) with prompts from the VideoPhy-2 dataset. They then selected 60 actions out of 197 where the model consistently failed to follow both the prompts and basic physical commonsense.  
接下来，为了找出最具挑战性的动作，研究人员使用[CogVideoX-5B](https://arxiv.org/abs/2408.06072)生成视频，其中提示来自 VideoPhy-2 数据集。然后，他们从 197 个动作中选出了 60 个动作，这些动作模型始终无法遵循提示和基本的物理常识。

These actions involved physics-rich interactions such as momentum transfer in discus throwing, state changes such as bending an object until it breaks, balancing tasks such as tightrope walking, and complex motions that included back-flips, pole vaulting, and pizza tossing, among others. In total, 1,200 prompts were chosen to increase the difficulty of the sub-dataset.  
这些动作涉及物理特性丰富的互动，例如掷铁饼时的动量传递、状态变化（例如弯曲物体直至其断裂）、平衡任务（例如走钢丝）以及包括后空翻、撑杆跳和扔披萨等复杂动作。总共选择了 1,200 个提示来增加子数据集的难度。

The resulting dataset comprised 3,940 captions – 5.72 times more than the earlier version of VideoPhy. The average length of the original captions is 16 tokens, while upsampled captions reaches 138 tokens – 1.88 times and 16.2 times longer, respectively.  
最终的数据集包含 3,940 个字幕，比 VideoPhy 的早期版本多 5.72 倍。原始字幕的平均长度为 16 个标记，而上采样字幕则达到 138 个标记，分别是 1.88 倍和 16.2 倍。

The dataset also features 102,000 human annotations covering semantic adherence, physical commonsense, and rule violations across multiple video generation models.  
该数据集还包含 102,000 条人工注释，涵盖多个视频生成模型的语义遵从性、物理常识和规则违规。

## **Evaluation

评估**

The researchers then defined clear criteria for evaluating the videos. The main goal was to assess how well each video matched its input prompt and followed basic physical principles.  
研究人员随后制定了评估视频的明确标准。主要目标是评估每个视频与输入提示的匹配程度以及遵循基本物理原理的程度。

Instead of simply ranking videos by preference, they used rating-based feedback to capture specific successes and failures. Human annotators scored videos on a five-point scale, allowing for more detailed judgments, while the evaluation also checked whether videos followed various physical rules and laws.  
他们不是简单地根据喜好对视频进行排序，而是使用基于评分的反馈来捕捉具体的成功和失败。人工注释者按照五分制对视频进行评分，以便做出更详细的判断，同时评估还检查视频是否遵循各种物理规则和定律。

For human evaluation, a group of 12 annotators were selected from trials on Amazon Mechanical Turk \(AMT\), and provided ratings after receiving detailed remote instructions. For fairness, *semantic adherence* and *physical commonsense* were evaluated separately \(in the original VideoPhy study, they were assessed jointly\).  
对于人工评估，从 Amazon Mechanical Turk \(AMT\) 的试验中选出了一组 12 名注释者，并在收到详细的远程指令后提供评分。为了公平起见，*语义遵守*和*物理常识*是分开评估的（在最初的 VideoPhy 研究中，它们是联合评估的）。

The annotators first rated how well videos matched their input prompts, then separately evaluated physical plausibility, scoring rule violations and overall realism on a five-point scale. Only the original prompts were shown, to maintain a fair comparison across models.  
注释者首先评估视频与输入提示的匹配程度，然后分别评估物理合理性、评分规则违规和整体真实性（五分制）。仅显示原始提示，以保持模型之间的公平比较。

![The interface presented to the AMT annotators.](https://www.unite.ai/wp-content/uploads/2025/03/interface.jpg)*The interface presented to the AMT annotators.向 AMT 注释者呈现的界面。*

Though human judgment remains the gold standard, it's expensive and comes with a [number of caveats](https://www.unite.ai/the-shortcomings-of-amazon-mechanical-turk-may-threaten-natural-language-generation-systems/). Therefore automated evaluation is essential for faster and more scalable model assessments.  
尽管人类判断仍然是黄金标准，但它成本高昂，并且存在[许多注意事项](https://www.unite.ai/the-shortcomings-of-amazon-mechanical-turk-may-threaten-natural-language-generation-systems/)。因此，自动化评估对于更快、更具可扩展性的模型评估至关重要。

The paper's authors tested several video-language models, including Gemini-2.0-Flash-Exp and [VideoScore](https://arxiv.org/abs/2406.15252), on their ability to score videos for semantic accuracy and for ‘physical commonsense'.  
论文作者测试了几种视频语言模型，包括 Gemini-2.0-Flash-Exp 和[VideoScore](https://arxiv.org/abs/2406.15252) ，测试它们对视频的语义准确性和“物理常识”进行评分的能力。

The models again rated each video on a five-point scale, while a separate classification task determined whether physical rules were followed, violated, or unclear.  
模型再次根据五分量表对每个视频进行评分，而单独的分类任务则确定是否遵循、违反或不清楚物理规则。

Experiments showed that existing video-language models struggled to match human judgments, mainly due to weak physical reasoning and the complexity of the prompts. To improve automated evaluation, the researchers developed **VideoPhy-2-Autoeval**, a 7B-parameter model designed to provide more accurate predictions across three categories: **semantic adherence**; **physical commonsense**; and **rule compliance**, fine-tuned on the [VideoCon-Physics](https://arxiv.org/abs/2406.03520) model using 50,000 human annotations\*.  
实验表明，现有的视频语言模型很难与人类判断相匹配，主要是因为物理推理能力较弱，提示内容复杂。为了改进自动评估，研究人员开发了**VideoPhy-2-Autoeval** ，这是一个 7B 参数模型，旨在在三个类别中提供更准确的预测：**语义遵循**、**物理常识**和**规则遵守**，使用 50,000 个人工注释\* 在[VideoCon-Physics](https://arxiv.org/abs/2406.03520)模型上进行了微调。

## **Data and Tests

数据和测试**

With these tools in place, the authors tested a number of generative video systems, both through local installations and, where necessary, via commercial APIs: CogVideoX-5B; [VideoCrafter2](https://arxiv.org/abs/2401.09047); [HunyuanVideo-13B](https://arxiv.org/abs/2412.03603); [Cosmos-Diffusion](https://arxiv.org/abs/2501.03575); Wan2.1-14B; [OpenAI Sora](https://openai.com/index/video-generation-models-as-world-simulators/); and [Luma Ray](https://lumalabs.ai/ray).  
利用这些工具，作者测试了许多生成视频系统，既通过本地安装，也通过商业 API（必要时）：CogVideoX-5B； [VideoCrafter2](https://arxiv.org/abs/2401.09047) ； [HunyuanVideo-13B](https://arxiv.org/abs/2412.03603) ； [Cosmos-Diffusion](https://arxiv.org/abs/2501.03575) ；Wan2.1-14B； [OpenAI Sora](https://openai.com/index/video-generation-models-as-world-simulators/) ；和[Luma Ray](https://lumalabs.ai/ray) 。

The models were prompted with upsampled captions where possible, except that Hunyuan Video and VideoCrafter2 operate under 77-token [CLIP](https://arxiv.org/abs/2103.00020) limitations, and cannot accept prompts above a certain length.  
模型在可能的情况下都使用上采样字幕进行提示，但 Hunyuan Video 和 VideoCrafter2 在 77 个令牌[CLIP](https://arxiv.org/abs/2103.00020)限制下运行，并且不能接受超过一定长度的提示。

Videos generated were kept to less than 6 seconds, since shorter output is easier to evaluate.  
生成的视频保持在 6 秒以内，因为较短的输出更容易评估。

The driving data was from the VideoPhy-2 dataset, which was split into a benchmark and training set. 590 videos were generated per model, except for Sora and Ray2; due to the cost factor \(equivalent lower numbers of videos were generated for these\).  
驾驶数据来自 VideoPhy-2 数据集，该数据集被分为基准和训练集。除 Sora 和 Ray2 外，每个模型生成了 590 个视频；由于成本因素（这些模型生成的视频数量较少）。

 **(Please refer to the source paper for further evaluation details, which are exhaustively chronicled there)（有关进一步的评估细节，请参阅源论文，其中有详尽的记录）**

The initial evaluation dealt with **physical activities/sports** \(PA\) and **object interactions** \(OI\), and tested both the general dataset and the aforementioned ‘harder' subset:  
初步评估涉及**体育活动/运动**（PA）和**物体交互**（OI），并测试了一般数据集和前面提到的“更难”子集：

![Results from the initial round.](https://www.unite.ai/wp-content/uploads/2025/03/table-2-3.jpg)*Results from the initial round.初轮结果。*

Here the authors comment:  
以下是作者的评论：

 **‘Even the best-performing model, Wan2.1-14B, achieves only 32.6% and 21.9% on the full and hard splits of our dataset, respectively. Its relatively strong performance compared to other models can be attributed to the diversity of its multimodal training data, along with robust motion filtering that preserves high-quality videos across a wide range of actions.“即使是性能最佳的模型 Wan2.1-14B，在我们数据集的完整分割和硬分割中也仅分别达到 32.6% 和 21.9%。与其他模型相比，其相对强劲的性能可以归因于其多模态训练数据的多样性，以及可在各种动作中保留高质量视频的强大运动过滤功能。**

 **‘Furthermore, we observe that closed models, such as Ray2, perform worse than open models like Wan2.1-14B and CogVideoX-5B. This suggests that closed models are not necessarily superior to open models in capturing physical commonsense.“此外，我们观察到封闭模型（例如 Ray2）的表现比开放模型（例如 Wan2.1-14B 和 CogVideoX-5B）更差。这表明封闭模型在捕捉物理常识方面并不一定优于开放模型。**

 **‘Notably, Cosmos-Diffusion-7B achieves the second-best score on the hard split, even outperforming the much larger HunyuanVideo-13B model. This may be due to the high representation of human actions in its training data, along with synthetically rendered simulations.'“值得注意的是，Cosmos-Diffusion-7B 在硬分割上取得了第二好的成绩，甚至超过了更大的 HunyuanVideo-13B 模型。这可能是由于其训练数据中人类行为的代表性高，以及合成渲染的模拟。”**

The results showed that video models struggled more with physical activities like sports than with simpler object interactions. This suggests that improving AI-generated videos in this area will require better datasets – particularly high-quality footage of sports such as tennis, discus, baseball, and cricket.  
结果表明，视频模型在处理体育等体力活动时比处理简单的物体交互时更吃力。这表明，要改进该领域的人工智能视频，需要更好的数据集——尤其是网球、铁饼、棒球和板球等运动的高质量镜头。

The study also examined whether a model’s physical plausibility correlated with other video quality metrics, such as aesthetics and motion smoothness. The findings revealed no strong correlation, meaning a model cannot improve its performance on VideoPhy-2 just by generating visually appealing or fluid motion – it needs a deeper understanding of physical commonsense.  
该研究还考察了模型的物理合理性是否与其他视频质量指标（如美观性和运动流畅度）相关。研究结果显示，二者之间没有很强的相关性，这意味着模型不能仅通过生成视觉吸引力或流畅的运动来提高其在 VideoPhy-2 上的性能——它需要对物理常识有更深入的理解。

Though the paper provides abundant qualitative examples, few of the static examples provided in the PDF seem to relate to the extensive video-based examples that the authors furnish at the project site. Therefore we will look at a small selection of the static examples and then some more of the actual project videos.  
尽管本文提供了丰富的定性示例，但 PDF 中提供的静态示例似乎很少与作者在项目现场提供的大量基于视频的示例相关。因此，我们将查看一小部分静态示例，然后再查看一些实际项目视频。

![The top row shows videos generated by Wan2.1. (a) In Ray2, the jet-ski on the left lags behind before moving backward. (b) In Hunyuan-13B, the sledgehammer deforms mid-swing, and a broken wooden board appears unexpectedly. (c) In Cosmos-7B, the javelin expels sand before making contact with the ground.](https://www.unite.ai/wp-content/uploads/2025/03/figure-6.jpg)*The top row shows videos generated by Wan2.1.*   *(a)*  *In Ray2, the jet-ski on the left lags behind before moving backward.*   *(b)*  *In Hunyuan-13B, the sledgehammer deforms mid-swing, and a broken wooden board appears unexpectedly.*   *(c)*  *In Cosmos-7B, the javelin expels sand before making contact with the ground.上排是 Wan2.1 生成的视频。（a）在 Ray2 中，左侧的水上摩托艇落后后向后移动。（b）在浑源-13B 中，大锤在挥动过程中发生变形，一块破碎的木板意外出现。（c）在宇宙-7B 中，标枪在接触地面之前就喷出了沙子。*

Regarding the above qualitative test, the authors comment:  
对于上述定性测试，作者评论道：

 **‘[We]**  **observe violations of physical commonsense, such as jetskis moving unnaturally in reverse and the deformation of a solid sledgehammer, defying the principles of elasticity. However, even Wan suffers from the lack of physical commonsense, as shown in**  **[the clip embedded at the start of this article].“[我们]**  **观察到违反物理常识的行为，例如水上摩托艇不自然地反向移动，以及实心大锤的变形，这些都违背了弹性原理。然而，就连万也缺乏物理常识，正如**  **[本文开头嵌入的剪辑]**  **所示。**

 **‘In this case, we highlight that a rock starts rolling and accelerating uphill, defying the physical law of gravity.'“在这种情况下，我们强调一块岩石开始滚动并加速上坡，违反了引力的物理定律。”**

Further examples from the project site:  
来自项目现场的更多示例：

[https://www.unite.ai/wp-content/uploads/2025/03/0-Cosmos_towel.mp4](https://www.unite.ai/wp-content/uploads/2025/03/0-Cosmos_towel.mp4)

****Click to play. ******Here the caption was ‘A person vigorously twists a wet towel, water spraying outwards in a visible arc' – but the resulting source of water is far more like a water-hose than a towel.******​********点击播放。********​**这里的标题是“一个人用力扭动一条湿毛巾，水以可见的弧线向外喷出”——但由此产生的水源更像是水管而不是毛巾。**

[https://www.unite.ai/wp-content/uploads/2025/03/0-Ray2_spills.mp4](https://www.unite.ai/wp-content/uploads/2025/03/0-Ray2_spills.mp4)

******Click to play.****** ** Here the caption was ‘A chemist pours a clear liquid from a beaker into a test tube, carefully avoiding spills', but we can see that the volume of water being added to the beaker is not consistent with the amount exiting the jug.**  
******点击播放。******​**这里的标题是“一位化学家将烧杯中的透明液体倒入试管中，小心避免溢出”，但我们可以看到加入烧杯的水量与从水壶中流出的水量不一致。**

As I mentioned at the outset, the volume of material associated with this project far exceeds what can be covered here. Therefore please refer to the source paper, project site and related sites mentioned earlier, for a truly exhaustive outline of the authors' procedures, and considerably more testing examples and procedural details.  
正如我在一开始提到的，与该项目相关的材料量远远超出了本文所能涵盖的范围。因此，请参阅前面提到的源论文、项目网站和相关网站，以获得作者程序的真正详尽概述，以及更多的测试示例和程序细节。

\* **As for the provenance of the annotations, the paper only specifies ‘acquired for these tasks' – it seems a lot to have been generated by 12 AMT workers.**   
\***至于注释的来源，论文只指定了“为这些任务而获得的”——其中很多似乎都是由 12 名 AMT 工作者生成的。**

**First published Thursday, March 13, 2025首次发布于 2025 年 3 月 13 日星期四**
