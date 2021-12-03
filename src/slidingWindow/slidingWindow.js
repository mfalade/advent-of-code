var input = "\n191\n185\n188\n189\n204\n213\n215\n227\n222\n221\n236\n235\n236\n232\n224\n228\n234\n226\n227\n228\n230\n232\n234\n213\n197\n198\n210\n238\n248\n261\n263\n265\n262\n295\n296\n311\n330\n333\n337\n344\n345\n356\n359\n360\n364\n367\n383\n386\n387\n391\n424\n426\n428\n440\n442\n446\n450\n423\n428\n423\n425\n445\n429\n436\n465\n456\n463\n461\n463\n483\n484\n500\n517\n525\n529\n527\n530\n535\n566\n578\n582\n587\n604\n613\n614\n609\n611\n619\n623\n627\n621\n622\n626\n644\n646\n655\n657\n659\n661\n671\n673\n668\n673\n676\n682\n683\n678\n679\n682\n681\n684\n686\n690\n693\n698\n700\n702\n707\n708\n732\n733\n734\n743\n745\n776\n794\n804\n784\n790\n813\n856\n855\n859\n850\n851\n886\n885\n888\n889\n883\n885\n920\n919\n917\n915\n918\n909\n910\n924\n925\n932\n933\n935\n966\n970\n971\n974\n958\n959\n961\n959\n964\n969\n970\n973\n972\n976\n998\n1009\n1010\n1011\n1046\n1047\n1040\n1041\n1056\n1062\n1061\n1062\n1077\n1078\n1080\n1082\n1094\n1096\n1097\n1103\n1128\n1125\n1167\n1176\n1175\n1173\n1183\n1182\n1183\n1188\n1202\n1204\n1205\n1206\n1207\n1212\n1235\n1236\n1256\n1268\n1270\n1276\n1281\n1283\n1276\n1287\n1292\n1295\n1291\n1297\n1298\n1301\n1312\n1316\n1333\n1327\n1340\n1338\n1348\n1364\n1381\n1382\n1383\n1394\n1385\n1388\n1387\n1388\n1394\n1398\n1400\n1397\n1399\n1401\n1408\n1410\n1420\n1421\n1434\n1433\n1436\n1456\n1455\n1479\n1482\n1483\n1522\n1526\n1527\n1542\n1543\n1544\n1548\n1557\n1571\n1574\n1580\n1579\n1602\n1618\n1605\n1608\n1612\n1622\n1625\n1626\n1633\n1648\n1641\n1643\n1650\n1652\n1659\n1678\n1681\n1688\n1692\n1702\n1686\n1688\n1685\n1684\n1674\n1694\n1696\n1695\n1720\n1729\n1736\n1762\n1763\n1767\n1780\n1789\n1796\n1798\n1799\n1800\n1808\n1800\n1805\n1848\n1849\n1867\n1888\n1902\n1903\n1920\n1923\n1926\n1930\n1933\n1925\n1906\n1878\n1898\n1899\n1930\n1936\n1948\n1974\n1983\n1984\n1986\n1983\n1984\n1987\n1985\n1988\n1992\n2005\n2009\n2013\n2025\n2033\n2043\n2046\n2030\n2014\n2009\n2011\n2013\n2043\n2049\n2053\n2065\n2070\n2079\n2080\n2090\n2092\n2102\n2116\n2138\n2140\n2141\n2143\n2149\n2152\n2153\n2154\n2170\n2194\n2192\n2216\n2231\n2246\n2261\n2268\n2269\n2252\n2260\n2264\n2274\n2289\n2293\n2296\n2297\n2300\n2305\n2334\n2329\n2353\n2357\n2359\n2364\n2374\n2377\n2364\n2365\n2366\n2360\n2362\n2360\n2361\n2367\n2357\n2362\n2376\n2379\n2380\n2381\n2401\n2436\n2435\n2439\n2446\n2454\n2456\n2459\n2492\n2493\n2514\n2519\n2524\n2529\n2530\n2535\n2548\n2549\n2551\n2548\n2553\n2552\n2556\n2563\n2570\n2603\n2616\n2617\n2623\n2630\n2631\n2641\n2645\n2660\n2662\n2663\n2664\n2662\n2668\n2673\n2677\n2687\n2688\n2699\n2698\n2691\n2695\n2696\n2710\n2711\n2717\n2722\n2723\n2747\n2746\n2754\n2753\n2752\n2771\n2773\n2774\n2777\n2789\n2790\n2805\n2807\n2818\n2817\n2825\n2818\n2828\n2833\n2834\n2837\n2839\n2854\n2856\n2858\n2859\n2863\n2880\n2882\n2884\n2887\n2888\n2889\n2902\n2911\n2917\n2936\n2938\n2940\n2943\n2944\n2943\n2947\n2954\n2956\n2957\n2959\n2957\n2958\n2959\n2956\n2959\n2960\n2969\n2974\n2979\n2983\n2985\n2986\n2992\n2993\n2995\n3025\n3037\n3036\n3037\n3038\n3040\n3043\n3049\n3058\n3071\n3072\n3080\n3083\n3081\n3090\n3091\n3070\n3076\n3079\n3083\n3084\n3086\n3101\n3114\n3106\n3107\n3137\n3138\n3139\n3137\n3133\n3137\n3102\n3108\n3109\n3124\n3130\n3138\n3149\n3150\n3160\n3171\n3191\n3190\n3200\n3205\n3229\n3235\n3237\n3238\n3239\n3243\n3244\n3245\n3246\n3250\n3265\n3268\n3269\n3271\n3279\n3278\n3279\n3280\n3281\n3290\n3295\n3296\n3300\n3303\n3304\n3305\n3308\n3325\n3313\n3326\n3327\n3335\n3336\n3337\n3335\n3361\n3378\n3374\n3378\n3387\n3406\n3416\n3418\n3438\n3454\n3460\n3475\n3476\n3477\n3471\n3476\n3477\n3486\n3487\n3500\n3502\n3503\n3530\n3531\n3530\n3556\n3563\n3564\n3565\n3566\n3580\n3587\n3591\n3598\n3599\n3612\n3613\n3624\n3623\n3631\n3660\n3661\n3662\n3668\n3671\n3672\n3674\n3683\n3684\n3693\n3694\n3700\n3696\n3699\n3705\n3706\n3710\n3717\n3731\n3734\n3729\n3735\n3736\n3739\n3749\n3734\n3739\n3742\n3753\n3756\n3757\n3775\n3777\n3774\n3780\n3785\n3786\n3790\n3792\n3796\n3798\n3802\n3817\n3818\n3815\n3822\n3824\n3849\n3856\n3871\n3845\n3847\n3849\n3851\n3853\n3884\n3885\n3887\n3889\n3891\n3894\n3895\n3900\n3918\n3935\n3936\n3941\n3945\n3936\n3942\n3945\n3942\n3943\n3965\n3974\n3976\n3979\n3975\n3976\n3980\n3993\n3992\n3991\n3999\n4000\n3996\n4019\n4028\n4029\n4031\n4053\n4054\n4080\n4087\n4089\n4088\n4098\n4100\n4103\n4104\n4112\n4125\n4145\n4148\n4152\n4153\n4158\n4162\n4165\n4177\n4184\n4203\n4205\n4206\n4207\n4211\n4215\n4221\n4240\n4247\n4253\n4261\n4262\n4265\n4269\n4273\n4274\n4258\n4260\n4264\n4282\n4299\n4313\n4284\n4287\n4289\n4290\n4293\n4295\n4297\n4296\n4310\n4314\n4313\n4327\n4329\n4330\n4328\n4338\n4347\n4368\n4371\n4373\n4379\n4388\n4392\n4396\n4393\n4394\n4393\n4397\n4406\n4409\n4410\n4414\n4437\n4436\n4428\n4429\n4434\n4426\n4427\n4428\n4445\n4447\n4467\n4471\n4470\n4472\n4485\n4487\n4493\n4495\n4491\n4497\n4500\n4506\n4507\n4508\n4511\n4518\n4519\n4523\n4520\n4523\n4540\n4541\n4548\n4549\n4550\n4551\n4560\n4570\n4586\n4575\n4581\n4585\n4586\n4591\n4601\n4595\n4597\n4601\n4613\n4615\n4617\n4619\n4604\n4609\n4610\n4616\n4640\n4666\n4676\n4677\n4678\n4709\n4704\n4719\n4727\n4729\n4730\n4747\n4753\n4755\n4768\n4770\n4772\n4777\n4781\n4811\n4814\n4843\n4844\n4846\n4850\n4862\n4863\n4868\n4869\n4870\n4871\n4874\n4881\n4882\n4878\n4887\n4895\n4898\n4910\n4920\n4908\n4910\n4909\n4914\n4916\n4922\n4914\n4918\n4926\n4949\n4952\n4953\n4955\n4956\n4959\n4985\n4986\n4990\n4992\n5028\n5029\n5032\n5030\n5037\n5038\n5047\n5053\n5054\n5059\n5057\n5059\n5062\n5067\n5085\n5086\n5090\n5084\n5077\n5078\n5081\n5091\n5094\n5096\n5095\n5097\n5103\n5118\n5144\n5146\n5153\n5160\n5169\n5173\n5174\n5175\n5184\n5187\n5195\n5196\n5216\n5225\n5238\n5239\n5232\n5235\n5237\n5242\n5244\n5247\n5254\n5262\n5271\n5281\n5287\n5288\n5260\n5264\n5282\n5295\n5301\n5304\n5310\n5295\n5296\n5297\n5298\n5303\n5304\n5305\n5277\n5278\n5289\n5295\n5290\n5297\n5299\n5320\n5328\n5341\n5347\n5356\n5361\n5364\n5365\n5378\n5379\n5377\n5378\n5367\n5380\n5381\n5387\n5385\n5390\n5391\n5392\n5415\n5422\n5423\n5425\n5439\n5441\n5448\n5455\n5470\n5477\n5482\n5488\n5489\n5492\n5501\n5499\n5496\n5499\n5533\n5552\n5562\n5563\n5565\n5566\n5572\n5571\n5581\n5583\n5589\n5594\n5593\n5596\n5602\n5606\n5629\n5643\n5644\n5652\n5673\n5676\n5680\n5676\n5681\n5696\n5703\n5698\n5718\n5720\n5733\n5736\n5741\n5766\n5771\n5786\n5787\n5793\n5790\n5786\n5804\n5805\n5808\n5809\n5816\n5810\n5811\n5818\n5829\n5836\n5839\n5824\n5839\n5843\n5845\n5849\n5853\n5856\n5861\n5873\n5894\n5895\n5896\n5897\n5898\n5899\n5900\n5913\n5917\n5918\n5923\n5924\n5934\n5935\n5952\n5965\n5963\n5958\n5961\n5975\n5988\n5989\n5996\n5997\n6008\n6011\n6023\n6024\n6033\n6048\n6050\n6051\n6049\n6048\n6043\n6048\n6051\n6055\n6081\n6084\n6087\n6093\n6092\n6090\n6078\n6079\n6103\n6092\n6094\n6099\n6100\n6116\n6123\n6129\n6127\n6138\n6139\n6141\n6143\n6146\n6147\n6159\n6162\n6163\n6177\n6179\n6183\n6187\n6188\n6194\n6198\n6213\n6237\n6267\n6282\n6288\n6292\n6297\n6310\n6323\n6325\n6324\n6347\n6349\n6350\n6353\n6363\n6376\n6384\n6394\n6397\n6401\n6402\n6399\n6415\n6416\n6421\n6422\n6423\n6420\n6445\n6446\n6449\n6451\n6457\n6460\n6461\n6467\n6468\n6473\n6474\n6517\n6522\n6519\n6515\n6532\n6533\n6535\n6530\n6532\n6522\n6548\n6549\n6565\n6568\n6579\n6556\n6563\n6565\n6572\n6576\n6578\n6601\n6608\n6611\n6612\n6626\n6619\n6651\n6657\n6658\n6666\n6665\n6660\n6682\n6704\n6705\n6711\n6708\n6716\n6720\n6725\n6727\n6729\n6733\n6734\n6737\n6736\n6741\n6742\n6743\n6750\n6756\n6757\n6758\n6755\n6774\n6773\n6774\n6780\n6781\n6790\n6791\n6800\n6812\n6815\n6817\n6827\n6826\n6832\n6833\n6834\n6833\n6822\n6825\n6829\n6836\n6840\n6846\n6850\n6861\n6868\n6869\n6872\n6879\n6882\n6884\n6907\n6917\n6930\n6924\n6934\n6931\n6918\n6924\n6928\n6934\n6935\n6936\n6953\n6955\n6964\n6987\n6999\n7009\n7042\n7048\n7027\n7054\n7053\n7072\n7073\n7055\n7056\n7057\n7079\n7080\n7084\n7095\n7108\n7107\n7109\n7111\n7134\n7135\n7137\n7138\n7145\n7151\n7161\n7172\n7179\n7183\n7189\n7188\n7189\n7195\n7202\n7236\n7241\n7250\n7277\n7295\n7297\n7294\n7298\n7297\n7301\n7289\n7291\n7276\n7293\n7295\n7311\n7318\n7341\n7378\n7398\n7408\n7409\n7412\n7409\n7413\n7397\n7399\n7423\n7424\n7423\n7426\n7418\n7414\n7409\n7412\n7425\n7426\n7433\n7439\n7448\n7462\n7466\n7467\n7468\n7477\n7480\n7481\n7498\n7499\n7501\n7507\n7527\n7535\n7548\n7551\n7552\n7555\n7561\n7554\n7559\n7560\n7587\n7590\n7596\n7620\n7628\n7645\n7646\n7652\n7653\n7654\n7663\n7670\n7678\n7683\n7686\n7687\n7683\n7692\n7691\n7687\n7688\n7691\n7699\n7698\n7725\n7733\n7734\n7736\n7740\n7751\n7744\n7724\n7719\n7729\n7731\n7746\n7747\n7749\n7722\n7725\n7730\n7735\n7737\n7738\n7739\n7724\n7721\n7724\n7736\n7727\n7730\n7731\n7732\n7736\n7737\n7768\n7787\n7797\n7807\n7815\n7819\n7825\n7852\n7856\n7862\n7869\n7881\n7882\n7885\n7888\n7892\n7889\n7893\n7895\n7896\n7901\n7919\n7921\n7932\n7933\n7964\n7979\n7990\n7991\n7994\n7997\n8011\n8005\n8006\n8014\n8047\n8049\n8064\n8065\n8046\n8047\n8079\n8081\n8082\n8083\n8055\n8052\n8056\n8063\n8064\n8066\n8053\n8067\n8072\n8073\n8077\n8079\n8081\n8076\n8083\n8086\n8098\n8100\n8109\n8107\n8124\n8125\n8126\n8127\n8145\n8146\n8152\n8175\n8176\n8177\n8182\n8193\n8195\n8197\n8199\n8203\n8204\n8213\n8217\n8237\n8240\n8239\n8230\n8237\n8245\n8259\n8264\n8272\n8288\n8285\n8286\n8300\n8301\n8304\n8305\n8327\n8326\n8327\n8341\n8343\n8356\n8357\n8358\n8367\n8374\n8375\n8391\n8392\n8393\n8394\n8399\n8405\n8402\n8404\n8435\n8444\n8484\n8481\n8490\n8492\n8493\n8494\n8503\n8506\n8516\n8515\n8516\n8504\n8508\n8513\n8529\n8542\n8545\n8541\n8546\n8549\n8570\n8552\n8553\n8581\n8578\n8585\n8593\n8596\n8605\n8606\n8608\n8616\n8627\n8628\n8627\n8639\n8644\n8645\n8626\n8633\n8635\n8636\n8640\n8645\n8655\n8673\n8693\n8694\n8695\n8696\n8695\n8714\n8716\n8742\n8739\n8735\n8740\n8763\n8762\n8771\n8772\n8777\n8776\n8787\n8788\n8795\n8796\n8777\n8782\n8783\n8794\n8800\n8810\n8827\n8828\n8833\n8829\n8841\n8862\n8865\n8867\n8869\n8895\n8899\n8901\n8904\n8908\n8909\n8927\n8928\n8930\n8931\n8935\n8945\n8946\n8950\n8954\n8957\n8959\n8949\n8961\n8976\n8980\n8986\n8988\n8992\n9003\n9008\n9009\n9029\n9050\n9051\n9054\n9055\n9068\n9054\n9071\n9082\n9087\n9089\n9112\n9113\n9127\n9126\n9125\n9129\n9138\n9140\n9145\n9149\n9151\n9179\n9185\n9187\n9188\n9189\n9186\n9190\n9207\n9208\n9209\n9221\n9228\n9252\n9254\n9264\n9267\n9276\n9287\n9293\n9292\n9260\n9261\n9260\n9265\n9266\n9285\n9287\n9289\n9290\n9291\n9292\n9293\n9295\n9313\n9314\n9291\n9282\n9304\n9315\n9316\n9317\n9327\n9345\n9350\n9352\n9356\n9366\n9367\n9400\n9407\n9408\n9415\n9418\n9419\n9432\n9441\n9442\n9439\n9440\n9451\n9455\n9464\n9472\n9479\n9481\n9490\n9514\n9527\n9546\n9552\n9556\n9570\n9582\n9584\n9592\n9597\n9602\n9618\n9619\n9622\n9639\n9645\n9648\n9643\n9647\n9648\n9650\n9641\n9665\n9678\n9681\n9682\n9683\n9692\n9703\n9704\n9702\n9704\n9712\n9726\n9731\n9732\n9733\n9744\n9745\n9757\n9755\n9763\n9764\n9766\n9768\n9782\n9780\n9781\n9783\n9786\n9803\n9804\n9821\n9822\n9840\n9841\n9843\n9839\n9840\n9846\n9856\n9859\n9863\n9862\n9864\n9865\n9866\n9870\n9878\n9877\n9894\n9896\n9937\n9938\n9943\n9944\n9943\n9952\n9962\n9983\n9985\n9984\n9992\n10002\n10003\n10041\n10040\n10041\n10040\n10042\n10029\n10034\n10033\n10034\n10052\n10053\n10062\n10055\n10056\n10057\n10069\n10073\n10067\n10070\n10065\n10064\n10069\n10071\n10092\n10069\n10070\n10080\n10095\n10099\n10100\n10101\n10099\n10115\n10116\n10117\n10122\n10124\n10129\n10096\n10101\n10106\n10099\n10102\n10143\n10144\n10145\n10146\n10148\n10149\n10150\n10160\n10132\n10137\n10177\n10181\n10178\n10183\n10189\n10191\n10192\n10194\n10203\n10199\n10207\n10218\n10223\n10224\n10225\n10245\n10239\n10247\n10252\n10250\n10254\n10255\n10256\n10279\n10280\n10292\n10293\n10300\n10310\n10312\n10321\n10324\n10326\n10330\n10329\n10328\n10329\n10333\n10355\n10354\n10349\n10352\n10357\n10369\n10386\n10387\n10402\n10406\n10407\n10404\n10405\n10407\n10408\n10412\n10413\n10417\n10420\n10412\n10426\n10427\n10424\n10433\n10434\n10435\n10456\n10472\n10492\n10494\n10508\n10510\n10511\n10512\n10513\n10514\n10507\n10510\n10511\n10515\n10525\n10526"
    .split("\n")
    .filter(function (value) { return value !== ""; })
    .map(Number);
var sum = function (arrayOfNumbers) {
    return arrayOfNumbers.reduce(function (current, accumulator) {
        return current + accumulator;
    }, 0);
};
var getCount = function (measurements) {
    var count = 0;
    for (var i = 0; i < measurements.length - 3; i++) {
        var firstSet = measurements.slice(i, i + 3);
        var secondSet = measurements.slice(i + 1, i + 4);
        console.log({ firstSet: firstSet, secondSet: secondSet });
        if (sum(firstSet) < sum(secondSet)) {
            count++;
        }
    }
    return count;
};
console.log(getCount(input));
