<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS_TP4</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>a4986815-d50d-474e-b35e-071d0be4356b</testSuiteGuid>
   <testCaseLink>
      <guid>302d422f-4bd2-4f01-a4cf-c5ae47085e15</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login -logout</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>ae0e8428-47b1-4316-bb7c-e2bef2cd7b27</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login no valido - clave en blanco</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>4ec1d614-d0fe-4e9d-ad42-b9f5d3619e1a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login no valido - clave erronea</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>a5888c1d-3cda-45cd-bfd1-45e469358693</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login no Valido - usuario erroneo - verify Element no present</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>17cfec4c-debd-41fd-86f9-0dca115f8676</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login no Valido - usuario incorrecto</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>db16eb63-0c00-4ad8-8b29-b3b47be77867</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login Valido</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>34eee788-f982-4048-b3d2-be830137f86d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/checkout</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>6f2ad6ec-b85f-4ab8-abcb-df654eae20d7</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Datafile</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>6f2ad6ec-b85f-4ab8-abcb-df654eae20d7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>firstName</value>
         <variableId>ae7e0460-d4c1-49b5-af3a-ca24ac61383f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>6f2ad6ec-b85f-4ab8-abcb-df654eae20d7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>lastName</value>
         <variableId>07cde5c4-a2e1-44e4-bd3d-2dc4ab94c044</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>6f2ad6ec-b85f-4ab8-abcb-df654eae20d7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>postalCode</value>
         <variableId>d61c91e2-26da-42dc-adae-22f264942742</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>59fdcfef-b0ce-44c2-b0e9-8314971c4147</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login Valido - Parametrizado</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>cef1021d-c6ee-412e-b3b5-73d6929c91d5</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Datafile2</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>cef1021d-c6ee-412e-b3b5-73d6929c91d5</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>401e976a-8070-4664-9b21-2241cec9a303</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>cef1021d-c6ee-412e-b3b5-73d6929c91d5</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>45ed88b9-f29f-4652-abba-38c2474f0400</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
